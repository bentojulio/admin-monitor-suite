FROM node:20-alpine AS base 
WORKDIR /app
COPY package*.json ./

COPY ama-design-system* ./ 
RUN npm ci

FROM base AS development

ARG VITE_ROUTE_URL
ARG VITE_ROUTE_URL_ABB
ARG VITE_API_URL
ENV VITE_ROUTE_URL=$VITE_ROUTE_URL
ENV VITE_ROUTE_URL_ABB=$VITE_ROUTE_URL_ABB
ENV VITE_API_URL=$VITE_API_URL
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM base AS builder

COPY . .
RUN npm run build:noenv

FROM httpd:alpine AS production

RUN sed -i 's/#LoadModule rewrite_module/LoadModule rewrite_module/' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/AllowOverride None/AllowOverride All/' /usr/local/apache2/conf/httpd.conf
WORKDIR /usr/local/apache2/htdocs/ams

COPY --from=builder /app/dist /usr/local/apache2/htdocs/ams

COPY --from=builder /app/.htaccess /usr/local/apache2/htdocs/ams

EXPOSE 80