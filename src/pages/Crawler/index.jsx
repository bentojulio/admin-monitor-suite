import React, { useState } from "react";
import { InputSearch, SortingTable, Button } from "ama-design-system";
import { useTheme } from '../../context/ThemeContext.jsx';
import { useTranslation } from 'react-i18next';
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";

export default function CrawlerList() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [data, setData] = useState(dataRows);
  const [checkboxesSelected, setCheckboxesSelected] = useState([]);

  return (
    <div>
      <h1>{t('CRAWLER_PAGE.LIST.title')}</h1>
      <div className="content bg-white">
        <h2>{t('CRAWLER_PAGE.LIST.table.title')}</h2>
        <div className="d-flex gap-2 align-items-center mb-3">
          <span>{t('MISC.filter')}</span>
          <InputSearch
            darkTheme={theme}
            placeholder={t('MISC.filter') + '...'}
            style={{ width: "50%" }}
            id="search"
          />
        </div>
        <div className="d-flex gap-4 justify-content-start mb-4">
          <Button
            darkTheme={theme}
            text={t('CRAWLER_PAGE.LIST.table.delete_crawlers')}
            className="btn-primary"
            onClick={() => console.log(t('CRAWLER_PAGE.LIST.table.create_button'))}
          />
        </div>
        
        <SortingTable
          darkTheme={theme}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptions}
          nextPage={() => null}
          caption={t('CRAWLER_PAGE.LIST.table.title')}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>
    </div>
  );
} 