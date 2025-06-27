import React from 'react';
import { Input } from "ama-design-system";
const InsertSiteMap = ({ register, errors, darkTheme }) => {
  return (
    <div className="d-flex flex-column justify-content-start mt-4">
      <p>2b. Por submissão de um siteMap</p>
      <p>
        Compile uma lista de URLs do sítio web pretendido (1 URL por
        linha) e cole essa lista no campo "Novos URLs" abaixo.
      </p>
      <Input
        id="sitemap"
        label="Ficheiro"
        type="file"
        darkTheme={darkTheme}

        {...register("sitemap", { required: "Campo obrigatório" })}
        error={errors.sitemap?.message}
        className="w-50"
      />
    </div>
  );
};

export default InsertSiteMap;