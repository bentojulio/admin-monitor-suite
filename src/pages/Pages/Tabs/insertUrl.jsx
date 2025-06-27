import React from 'react';
import { TextArea, Button } from "ama-design-system";
const InsertUrl = ({ register, errors, darkTheme}) => {
    return (
      <>
                <div className="d-flex flex-row justify-content-between flex-column border-left">
              <p>2a. Por submissão de lista de URLs</p>
              <p>
                Compile uma lista de URLs do sítio web pretendido (1 URL por
                linha) e cole essa lista no campo "Novos URLs" abaixo.
              </p>
              <TextArea
                id="urls"
                label="Novos URLs"
                {...register("urls", { required: "Campo obrigatório" })}
                error={errors.urls?.message}
                rows={10}
                className="w-50"
                darkTheme={darkTheme}
              />
             
            </div>
            <div className="d-flex justify-content-start">
              
            <Button
                type="submit"
                text="Adicionar Páginas"
                variant="primary"
                darkTheme={darkTheme}
                onClick={() => console.log("Páginas adicionadas")}
                />
                </div>
</>
    );
};

export default InsertUrl;