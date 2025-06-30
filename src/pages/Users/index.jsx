import React, { useState } from "react";
import {
  Button,
  InputSearch,
  SortingTable,
  Breadcrumb
} from "ama-design-system";
import "./style.users.css";
import {
  directoriesHeaders,
  dataRows,
  columnsOptions,
  nameOfIcons,
  paginationButtonsTexts
} from "./table.config.jsx";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from 'react-i18next';

const UserList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const breadcrumbs = [
    { children: <Link to="/">Início</Link> },
    { title: "Utilizadores" },
  ];

  const [data, setData] = useState(dataRows);
  const [checkboxesSelected, setCheckboxesSelected] = useState([]);

  const onSubmit = (formData) => {
    console.log("User data:", formData);
    // Lógica de criação de utilizador, se for o caso
  };

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />
      <h1>{t('USERS_PAGE.LIST.title')}</h1>
      <p>
        {t('USERS_PAGE.LIST.subtitle')}
      </p>

      <div className="content bg-white">
        <h2>{t('USERS_PAGE.LIST.title')}</h2>

          <div className="d-flex gap-2 align-items-center mb-4">
            <span>{t('MISC.filter')}</span>
            <InputSearch
              darkTheme={theme}
              placeholder={t('MISC.filter') + '...'}
              label={t('MISC.filter')}
            />
          </div>


        <SortingTable
          darkTheme={theme}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptions}
          nextPage={() => null}
          caption={t('DIRECTORIES_PAGE.LIST.subtitle')}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project=""
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>
    </div>
  );
};

export default UserList;
