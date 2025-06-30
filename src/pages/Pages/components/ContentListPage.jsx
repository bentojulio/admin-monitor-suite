import React, { useState } from "react";
import { Button, InputSearch, SortingTable } from "ama-design-system";
import {
  directoriesHeaders,
  dataRows,
  columnsOptions,
  nameOfIcons,
  paginationButtonsTexts,
} from "../table.config";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from 'react-i18next';

export default function ContentListPages ({ checkboxesSelected, setCheckboxesSelected, data, setData}){
  const { theme } = useTheme();
  const { t } = useTranslation();
  return(
     <div>

        <div className="d-flex  gap-2 align-items-center mb-3">
          <span>{t('MISC.filter')} {t('PAGES_PAGE.LIST.title')}:</span>
          <InputSearch
            darkTheme={theme}
            placeholder={t('MISC.filter') + ' ' + t('PAGES_PAGE.LIST.title') + '...'}
            label={t('MISC.filter') + ' ' + t('PAGES_PAGE.LIST.title')}
            />
        </div>
        <div className="d-flex gap-4 justify-content-start mb-4">
          <Button
            darkTheme={theme}
            text={t('PAGES_PAGE.LIST.delete_pages')}
            icon={"AMA-Adicionar-Line"}
            className="btn-primary"
            onClick={() => console.log(t('PAGES_PAGE.LIST.delete_pages'))}
            />
        </div>
        <SortingTable
          darkTheme={theme}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptions}
          nextPage={() => null}
          caption={t('PAGES_PAGE.LIST.table.title')}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
          />
          </div>
  )
}