import React, { useState } from "react";
import { Button, InputSearch, SortingTable } from "ama-design-system";
import {
  directoriesHeaders,
  dataRows,
  columnsOptions,
  nameOfIcons,
  paginationButtonsTexts,
} from "../table.config";

export default function ContentListPages ({ checkboxesSelected, setCheckboxesSelected, data, setData}){

  return(
     <div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span>Filtrar Páginas Web:</span>
          <InputSearch
            placeholder={"Pesquisar Páginas Web..."}
            style={{ width: "87%" }}
            />
        </div>
        <div className="d-flex gap-4 justify-content-end mb-4">
          <Button
            text={"Apagar Páginas Web"}
            icon={"AMA-Adicionar-Line"}
            className="btn-primary"
            onClick={() => console.log("Criar Utilizador")}
            />
        </div>
        <SortingTable
          darkTheme={false ? "dark" : "light"}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptions}
          nextPage={() => null}
          caption={
            "Estatísticas do diretório" +
            " " +
            "Os 25 Portais + Procurados da AP"
          }
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
          />
          </div>
  )
}