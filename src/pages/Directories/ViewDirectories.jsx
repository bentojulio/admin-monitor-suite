import { useState } from "react";
import { Button, StatisticsHeader, Breadcrumb } from "ama-design-system";
import "./style.users.css";
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import { RadarGraph } from "../../components/RadarGraph/index.jsx";
import GoodBadTab from "../../components/GoodBadTab/GoodBadTab.jsx";
import { Link, useParams } from "react-router-dom";
import { BarLineGraphTabs } from "../../components/BarLineGraph/index.jsx";
import { 
  barData,
  barOptions,
  dataHeaders as dataHeadersBar,
  columnsOptions as columnsOptionsBar,
  dataList as dataListBar
 } from "../../components/BarLineGraph/table.config.jsx";
import { useTheme } from "../../context/ThemeContext";
import ContentListWebSites from "../Websites/components/ContentListWebSites.jsx";
import { barOptionsDark, dataRows as dataRowsWebSites } from "../Websites/table.config.jsx";
import { useTranslation } from "react-i18next"; 

const ViewDirectories = () => {
  const { directoryName } = useParams();
  const { theme } = useTheme();
  const { t } = useTranslation();
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
    { title: directoryName }
  ];
  const [data, setData] = useState(dataRowsWebSites)
  const [checkboxesSelected, setCheckboxesSelected] = useState([])
  const barDataCopy = JSON.parse(JSON.stringify(barData));
  const barOptionsCopy = JSON.parse(JSON.stringify(barOptions));
  return (

    <div>
      <Breadcrumb data={breadcrumbs} />

      <h1>{t('DIRECTORIES_PAGE.LIST.title')} - {directoryName}</h1>
      <p>{t('DIRECTORIES_PAGE.LIST.subtitle')}</p>

      <div>
        <ContentListWebSites
          checkboxesSelected={checkboxesSelected}
          setCheckboxesSelected={setCheckboxesSelected}
          data={data}
          setData={setData}
        />

        
      </div>
    

      <div className="bg-white mt-5">
        <div>
          <h2>{t('DIRECTORIES_PAGE.LIST.export_data')}</h2>
          <p>{t('DIRECTORIES_PAGE.LIST.export_data_description')}</p>
        </div>
        <div className="d-flex justify-content-start align-items-end">
          <Button
            darkTheme={theme}
            text={t('DIRECTORIES_PAGE.LIST.export_csv')}
            className="btn-primary"
            onClick={() => console.log(t('DIRECTORIES_PAGE.LIST.export_csv'))}
            />
        </div>
      </div>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">{t('DIRECTORIES_PAGE.LIST.global_indicators')}</h2>
        <StatisticsHeader
          darkTheme={theme}
          gaugeDescription=""
          gaugeTitle={[t('STATISTICS.gauge.label')]}
          screenReaderTitle={t('DIRECTORIES_PAGE.LIST.global_indicators')}
          gaugeType=""
          tag="h3"
          newestPage={t('STATISTICS.newest_page_updated')}
          oldestPage={t('STATISTICS.oldest_page_updated')}
          stats={{
            oldestPage: '16 de outubro de 2023',
            recentPage: '16 de outubro de 2023',
            score: '8.5',
            statsTable: [
              1,
              24,
              26,
              1423,
              45
            ]
          }}
          statsTitles={[
            t('DIRECTORIES_PAGE.LIST.title'),
            t('ENTITIES_PAGE.LIST.title'),
            t('WEBSITES_PAGE.LIST.title'),
            t('PAGES_PAGE.LIST.title'),
            t('STATISTICS.average_page')
          ]}
          subtitle={t('STATISTICS.subtitle')}
          title={t('STATISTICS.title')}
        />
      </div>

      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Conformidade global do Diretório</h2>
        <StatisticsHeader
          darkTheme={theme}
          gaugeDescription=""
          doubleRow={true}
          gaugeType={null}
          showGauge={false}
          tag="h3"
          screenReaderTitle="Conformidade global do Diretório"
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
        <h2 className="mb-4">Distribuição das pontuações AccessMonitor no universo do Diretório</h2>
        <BarLineGraphTabs
          columnsOptions={columnsOptionsBar}
          barData={barDataCopy}
          barOptions={theme === "light" ? barOptionsCopy : barOptionsDark}
          dataHeaders={dataHeadersBar}
          dataList={dataListBar}
          darkTheme={theme}
        />
      </div>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Mancha Gráfica da Acessibilidade</h2>
        <RadarGraph darkTheme={theme}/>
      </div>
      <div className="mt-5 bg-white p-4">
        <h2 className="mb-4">Distribuição detalhada das melhores práticas</h2>
        <GoodBadTab darkTheme={theme}/>
      </div>
    </div>
  )
}

export default ViewDirectories;