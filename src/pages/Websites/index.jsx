import React, { useState } from "react";
import { Button, InputSearch, SortingTable } from "ama-design-system";
import "./style.users.css";
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import ContentListWebSites from "./components/ContentListWebSites.jsx";

const WebSiteList = () => {


    const [data, setData] = useState(dataRows)
    const [checkboxesSelected, setCheckboxesSelected] = useState([])

    return (

        <div>
            <h1>Sítios web</h1>
            <p>Abaixo encontra a listagem de todos os sítios web registados no AdminMonitorSuite, num total de 38 diretórios.</p>

            <div className="content bg-white">

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