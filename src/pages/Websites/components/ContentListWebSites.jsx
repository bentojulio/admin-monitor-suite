import React, { useState } from "react";
import { Button, InputSearch, SortingTable } from "ama-design-system";
import { useTheme } from '../../../context/ThemeContext';
import {
  directoriesHeaders,
  columnsOptions,
  nameOfIcons,
  paginationButtonsTexts,
} from "../table.config";
import { useTranslation } from "react-i18next";

export default function ContentListWebSites({ checkboxesSelected, setCheckboxesSelected, data, setData }) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className="content bg-white">
      <h2>{t('WEBSITES_PAGE.LIST.title')}</h2>
      <div className="d-flex gap-2 align-items-center mb-3">
        <span>{t('MISC.filter')} {t('WEBSITES_PAGE.LIST.title')}:</span>
        <InputSearch
          darkTheme={theme}
          label={t('MISC.filter') + ' ' + t('WEBSITES_PAGE.LIST.title')}
          placeholder={t('MISC.filter') + ' ' + t('WEBSITES_PAGE.LIST.title') + '...'}
        />
      </div>
      <div className="d-flex gap-4 justify-content-start mb-4">
        <Button
          darkTheme={theme}

          text={t('WEBSITES_PAGE.LIST.delete_websites')}
          icon={"AMA-Adicionar-Line"}
          className="btn-primary"
          onClick={() => console.log(t('WEBSITES_PAGE.LIST.delete_websites'))}
        />
        <Button
          darkTheme={theme}

          text={t('PAGES_PAGE.LIST.delete_pages')}
          icon={"AMA-Adicionar-Line"}
          className="btn-primary"
          onClick={() => console.log(t('PAGES_PAGE.LIST.delete_pages'))}
        />
        <Button
          darkTheme={theme}

          text={t('WEBSITES_PAGE.LIST.re_evaluate_websites')}
          icon={"AMA-Adicionar-Line"}
          className="btn-primary"
          onClick={() => console.log(t('WEBSITES_PAGE.LIST.re_evaluate_websites'))}
        />
        <Button
          darkTheme={theme}

          text={t('WEBSITES_PAGE.LIST.crawler')}
          icon={"AMA-Adicionar-Line"}
          className="btn-primary"
          onClick={() => console.log(t('WEBSITES_PAGE.LIST.crawler'))}
        />
      </div>
      <SortingTable
        darkTheme={theme}
        headers={directoriesHeaders}
        setDataList={setData}
        dataList={data}
        columnsOptions={columnsOptions}
        nextPage={() => null}
        caption={"Estatísticas do diretório" + " " + "Os 25 Portais + Procurados da AP"}
        iconsAltTexts={nameOfIcons}
        paginationButtonsTexts={paginationButtonsTexts}
        project={""}
        setCheckboxesSelected={setCheckboxesSelected}
      />
    </div>
  );
}