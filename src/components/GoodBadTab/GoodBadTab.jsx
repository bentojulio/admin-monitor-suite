import React, { useState, useEffect } from 'react'
import { Tabs } from 'ama-design-system'
import { 
  dataHeadersBad, 
  dataBad, 
  columnsOptionsBad,
  nameOfIcons, 
  paginationButtonsTexts 
} from "./table.config.jsx";
import { SortingTable } from 'ama-design-system';
import { useTheme } from '../../context/ThemeContext';

export default function GoodBadTab() {
    const { theme } = useTheme();
    const [dataGood, setDataGood] = useState([])
    const [dataBad, setDataBad] = useState([])
    const [checkboxesSelected, setCheckboxesSelected] = useState([])

    useEffect(() => {
        // Initialize data if needed
    }, [])

    const tabs = [
        {
            eventKey: "tab1",
            title: "Boas Práticas",
            component:
                <SortingTable
                    darkTheme={theme === 'dark'}
                    headers={dataHeadersBad}
                    setDataList={setDataGood}
                    dataList={dataGood}
                    columnsOptions={columnsOptionsBad}
                    nextPage={() => null}
                    caption="Boas Práticas"
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
                    darkTheme={theme === 'dark'}
                    headers={dataHeadersBad}
                    setDataList={setDataBad}
                    dataList={dataBad}
                    columnsOptions={columnsOptionsBad}
                    nextPage={() => null}
                    caption="Más Práticas"
                    iconsAltTexts={nameOfIcons}
                    paginationButtonsTexts={paginationButtonsTexts}
                    project={""}
                    setCheckboxesSelected={setCheckboxesSelected}
                />
        }
    ]
    return (
        <>
            <Tabs tabs={tabs} />
        </>
    )
}