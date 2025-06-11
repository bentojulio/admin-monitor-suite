import React, { useState, useEffect } from 'react'
import { Tabs } from 'ama-design-system'
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import { SortingTable } from 'ama-design-system';

export default function GoodBadTab() {
    const [data, setData] = useState([])
    useEffect(()=>{
        
    }, [])
    const [checkboxesSelected, setCheckboxesSelected] = useState()
    const tabs = [
        {
            eventKey: "tab1",
            title: "Boas Práticas",
            component:
                <SortingTable
                    darkTheme={false ? "dark" : "light"}
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
        },
        {
            eventKey: "tab2",
            title: "Más Práticas",
            component:
                <SortingTable
                    darkTheme={false ? "dark" : "light"}
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
        }
    ]
    return (
        <>
            <Tabs tabs={tabs}

            />
        </>
    )
}