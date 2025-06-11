import { useState } from "react";
import { Button, StatisticsHeader, Breadcrumb, SortingTable } from "ama-design-system";
import "./style.users.css";
import { RadarGraph } from "../../components/RadarGraph/index.jsx";
import GoodBadTab from "../../components/GoodBadTab/GoodBadTab.jsx";
import { Link } from "react-router-dom";
import { BarLineGraphTabs } from "../../components/BarLineGraph/index.jsx";
import ContentListPages from "../Pages/components/ContentListPage.jsx";
import { 
  dataRows as dataRowsBad,
  columnsOptions as columnsOptionsBad,
  directoriesHeaders as dataHeadersBad,
  itemsPaginationText,
  nameOfIcons,
  nItemsPerPageText,
  paginationButtonsTexts,
 } from "../../components/GoodBadTab/table.config.jsx";
import { dataRows, horizontalData, optionsHorizontalBar } from "./table.config.jsx";
import { barData, barOptions, dataHeaders } from "../../components/BarLineGraph/table.config.jsx";

const ViewWebSites = () => {

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
    },
    {
      subtitle: "Conformidade AAA",
      subtitle2: "Sem erros de nível A + AA + AAA"
    }

  ])
  const breadcrumbs = [
    { children: <Link to="/">Home</Link> },

    {
      title: "Dashboard",
    }
  ];
  const [data, setData] = useState([])
  const [dataBad, setDataBad] = useState([])
  const [checkboxesSelected, setCheckboxesSelected] = useState([])
  const columnsOptionsCopy = JSON.parse(JSON.stringify(columnsOptionsBad));
  return (

    <div>
      <Breadcrumb data={breadcrumbs} />

      <h1>Lista de páginas do sítio Web</h1>
      <p>Abaixo encontra a listagem de todos os Directórios registados no AdminMonitorSuite, num total de 38 diretórios.</p>

      <div className="content">
        <ContentListPages
          checkboxesSelected={checkboxesSelected}
          setCheckboxesSelected={setCheckboxesSelected}
          data={data}
          setData={setData}
        />
       
      </div>
      <div className="mt-5 bg-white p-4 d-flex flex-column gap-3">
          <h2>Exportação de dados</h2>
          <p>Para exportar todos os dados do Observatório à data de hoje, pressione o botão "Exportar CSV" abaixo.</p>
          <div className="d-flex justify-content-end align-items-end">
        <Button
            text={"Exportar CSV"}
            className="btn-primary"
            onClick={() => console.log("Criar Utilizador")}
          />
        </div>
        </div>

      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Indicadores globais do sítio web</h2>
        <StatisticsHeader
          darkTheme="light"
          gaugeDescription=""
          gaugeTitle={[
            'Pontuação média'
          ]}
          gaugeType=""
          newestPage="Avaliação mais recente de uma página:"
          oldestPage="Avaliação mais antiga de uma página:"
          stats={{
            oldestPage: '16 de outubro de 2023',
            recentPage: '16 de outubro de 2023',
            score: '8.5',
            statsTable: [
              1
            ]
          }}
          statsTitles={[
            'Número de páginas recolhidas',
          ]}
          subtitle="Metadados"
          title="Estatísticas"
        />
      </div>

      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Conformidade do sítio web</h2>
        <StatisticsHeader
          darkTheme="light"
          gaugeDescription=""
          doubleRow={true}
          gaugeType={null}
          showGauge={false}
          stats={{
            recentPage: "",
            oldestPage: "",
            score: 9,
            statsTable:
              [
                42,
                0,
                42,
                0,
                0,
                0
              ]
          }}
          statsTitles={statsTitle}
          subtitle="Metadados"
          title="Estatísticas"
        />
      </div>

      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Distribuição das pontuações AccessMonitor no universo das 37 páginas analisadas no sítio web</h2>
        <BarLineGraphTabs 
          barData={barData}
          barOptions={barOptions}
          columnsOptions={columnsOptionsBad}
          dataHeaders={dataHeaders}
          dataList={[]}
        />
      </div>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Más Práticas de acessibilidade encontradas no sítio web</h2>
        <BarLineGraphTabs 
          barData={horizontalData}
          barOptions={optionsHorizontalBar}
          columnsOptions={columnsOptionsBad}
          dataHeaders={dataHeadersBad}
          dataList={[]}
        />
      </div>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Mancha Gráfica da Acessibilidade</h2>
        <RadarGraph />
      </div>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Distribuição detalhada das melhores práticas</h2>
        <SortingTable
          darkTheme={false ? "dark" : "light"}
          headers={dataHeadersBad}
          setDataList={setDataBad}
          dataList={dataBad}
          columnsOptions={columnsOptionsBad}
          nextPage={() => null}
          caption={"Estatísticas do diretório" + " " + "Os 25 Portais + Procurados da AP"}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>
    </div>
  )
}

export default ViewWebSites;