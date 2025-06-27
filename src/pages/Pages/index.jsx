import React, { useState } from "react";
import "./style.users.css";
import {
  dataRows,
} from "./table.config";
import ContentListPages from "./components/ContentListPage";
import { useTranslation } from "react-i18next";
const PageList = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(dataRows);
  const [checkboxesSelected, setCheckboxesSelected] = useState([]);

    return(
    
    <div>
      <h1>{t('PAGES_PAGE.LIST.title')}</h1>
      <p>
        {t('PAGES_PAGE.LIST.subtitle')}
      </p>

      <div className="content bg-white">
        <h2>{t('PAGES_PAGE.LIST.title')}</h2>
        <ContentListPages 
        checkboxesSelected={checkboxesSelected}
        setCheckboxesSelected={setCheckboxesSelected}
        data={data}
        setData={setData}
        />


    </div>
  <SortingTable
      darkTheme={false ? "dark" : "light"}
      headers={directoriesHeaders}
      setDataList={setData}
      dataList={data}
      columnsOptions={columnsOptions}
      nextPage={() => null}
      caption={"Estatísticas do diretório"+ " " + "Os 25 Portais + Procurados da AP"}
      iconsAltTexts={nameOfIcons}
      paginationButtonsTexts={paginationButtonsTexts}
      project={""}
      setCheckboxesSelected={setCheckboxesSelected}
      />
      </div>
    </div>
)
}

export default PageList;