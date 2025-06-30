import React, { useState } from "react";
import { Button, InputSearch, SortingTable, Breadcrumb } from "ama-design-system";
import { useTheme } from '../../context/ThemeContext';
import "./style.users.css";
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const DirectoriesList = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const breadcrumbs = [
    { children: <Link to="/">Home</Link> },
    {
      title: "Dashboard",
    },
  ];
  const [data, setData] = useState(dataRows);
  const [checkboxesSelected, setCheckboxesSelected] = useState([]);

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />

      <h1>{t('DIRECTORIES_PAGE.LIST.title')}</h1>
      <p>
        {t('DIRECTORIES_PAGE.LIST.subtitle')}
      </p>

      <div className="content bg-white">
        <h2>{t('DIRECTORIES_PAGE.LIST.title')}</h2>
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
            text={t('DIRECTORIES_PAGE.LIST.re_evaluate_pages')}
            icon={"AMA-Adicionar-Line"}
            className="btn-primary"
            onClick={() => console.log(t('DIRECTORIES_PAGE.LIST.delete_directories'))}
          />
          <Button
            darkTheme={theme}
            text={t('DIRECTORIES_PAGE.LIST.delete_page')}
            icon={"AMA-Adicionar-Line"}
            className="btn-primary"
            onClick={() => console.log(t('DIRECTORIES_PAGE.LIST.delete_directories'))}
          />
          <Button
            darkTheme={theme}
            text={t('DIRECTORIES_PAGE.LIST.delete_directories')}
            icon={"AMA-Adicionar-Line"}
            className="btn-primary"
            onClick={() => console.log(t('DIRECTORIES_PAGE.LIST.delete_directories'))}
          />


        </div>
        <SortingTable
          darkTheme={theme}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptions}
          nextPage={() => null}
          caption={t('DIRECTORIES_PAGE.LIST.table.title')}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>
    </div>
  );
};

export default DirectoriesList;