import React, { useState } from "react";
import { Button, InputSearch, SortingTable } from "ama-design-system";
import "./style.users.css";
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import ContentListWebSites from "./components/ContentListWebSites.jsx";
import { useTranslation } from 'react-i18next';

const WebSiteList = () => {
    const { t } = useTranslation();

    const [data, setData] = useState(dataRows)
    const [checkboxesSelected, setCheckboxesSelected] = useState([])

    return (

        <div>
            <h1>{t('WEBSITES_PAGE.LIST.title')}</h1>
            <p>{t('WEBSITES_PAGE.LIST.subtitle')}</p>

            <div>

                <ContentListWebSites
                    checkboxesSelected={checkboxesSelected}
                    setCheckboxesSelected={setCheckboxesSelected}
                    data={data}
                    setData={setData}
                />

            </div>
        </div>
    )
}

export default WebSiteList;