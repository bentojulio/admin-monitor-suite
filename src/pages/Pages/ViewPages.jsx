import React, { useState } from "react";
import { Button, StatisticsHeader, Breadcrumb, SortingTable } from "ama-design-system";
import "./style.users.css";
import { directoriesHeadersPage, dataRowsPage, columnsOptionsPage, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import { RadarGraph } from "../../components/RadarGraph/index.jsx";
import GoodBadTab from "../../components/GoodBadTab/GoodBadTab.jsx";
import { Link } from "react-router-dom";
import { BarLineGraphTabs } from "../../components/BarLineGraph/index.jsx";
import { 
  barData,
  barOptions,
  dataHeaders as dataHeadersBar,
  columnsOptions as columnsOptionsBar,
  dataList as dataListBar
 } from "../../components/BarLineGraph/table.config.jsx";
import { useTheme } from '../../context/ThemeContext';

const ViewPages = () => {
  const { theme } = useTheme();
  const [statsTitle, setWebsiteStatsTitle] = useState([
    { subtitle: 'Sítios Web', subtitle2: "" },
    { subtitle: 'Sítios Web não conformes', subtitle2: "" },
    { subtitle: 'Sítios Web conformes', subtitle2: "" },
    {
      subtitle: "Conformidade A",
      subtitle2: "Sem erros de nível A"
    },
    {
      subtitle: "Conformidade AA",
      subtitle2: "Sem Erros de Nível A + AA"
    }, {
      subtitle: "Conformidade AAA",
      subtitle2: "Sem erros de nível A + AA + AAA"
    }
  ])
  const breadcrumbs = [
    { children: <Link to="/">Global</Link> },
    { children: <Link to="/directories">Diretórios</Link> },
    { children: <Link to="/directories/view">Diretório</Link> },
    { children: <Link to="/websites/view">Sítio Web</Link> },
    { title: "Página" }
  ];
  const [data, setData] = useState(dataRowsPage)
  const [checkboxesSelected, setCheckboxesSelected] = useState([])

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />

      <h1>Página</h1>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Avaliações efetuadas ao longo do tempo </h2>
        <SortingTable
          darkTheme={theme}
          headers={directoriesHeadersPage}
          setDataList={setData}
          dataList={data}
          columnsOptions={columnsOptionsPage}
          nextPage={() => null}
          caption="Histórico de avaliações da página"
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>

      <div className="mt-5 bg-white">
        <h2>Exportação de dados</h2>
        <p>Para exportar os dados da última avaliação da página pressione o botão "Exportar úlitma avaliação da página em CSV". Para exportar os dados de todas as avaliações efetuadas à página pressione "Exportar todas as avaliações da página em CSV".
        </p>
        <div className="d-flex justify-content-start align-items-end gap-3">
          <Button
            darkTheme={theme}
            text={"Exportar última avaliação da página em CSV"}
            className="btn-primary"
            onClick={() => console.log("Criar Utilizador")}
          />
          <Button
            darkTheme={theme}
            text={"Exportar todas as avaliações da página em CSV"}
            className="btn-primary"
            onClick={() => console.log("Criar Utilizador")}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewPages;