import React, { useState } from "react";
import { Button, InputSearch, SortingTable, Breadcrumb } from "ama-design-system";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import "./style.users.css";
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import { useTranslation } from "react-i18next";

const EntitiesList = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [data, setData] = useState(dataRows);
  const [checkboxesSelected, setCheckboxesSelected] = useState([]);
  const breadcrumbs = [
    { children: <Link to="/">Início</Link> },

    {
      title: "Entidades",
    }
  ];
  return (
    <div>
            <Breadcrumb data={breadcrumbs} />
      
      <h2>{t('ENTITIES_PAGE.LIST.title')}</h2>
      <p>
        {t('ENTITIES_PAGE.LIST.subtitle')}
      </p>

      <div className="content bg-white">
        <h2>{t('ENTITIES_PAGE.LIST.title')}</h2>
        <div className="d-flex  gap-2 align-items-center mb-3">
          <span>{t('MISC.filter')}</span>
          <InputSearch
            darkTheme={theme}
            placeholder={t('MISC.filter') + '...'}
            label={t('MISC.filter')}
          />
        </div>
        <div className="d-flex gap-4 justify-content-start mb-4">
          <Button
            darkTheme={theme}
            text={t('ENTITIES_PAGE.LIST.delete_entities')}
            icon={"AMA-Adicionar-Line"}
            className="btn-primary"
            onClick={() => console.log(t('ENTITIES_PAGE.ADD.title'))}
          />
        </div>
        <SortingTable
         darkTheme={theme}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptions}
          nextPage={() => null}
          caption={t('ENTITIES_PAGE.LIST.table.title')}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>
    </div>
  );
};

export default EntitiesList;