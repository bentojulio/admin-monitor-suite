import React, { useState, useEffect, useMemo } from "react";
import { InputSearch, SortingTable, Button, Breadcrumb } from "ama-design-system";
import { Link, useNavigate } from "react-router";
import { useTheme } from '../../context/ThemeContext.jsx';
import { useTranslation } from 'react-i18next';
import { directoriesHeaders, dataRows, columnsOptions, nameOfIcons, paginationButtonsTexts } from "./table.config.jsx";
import { api } from "../../config/api";
import moment from "moment";
export default function CrawlerList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const breadcrumbs = [
    { children: <Link to="/">Início</Link> },
    { title: "Crawler" },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/crawler/all');

      setData(response.data.result.map(crawl => ({
        id:crawl.CrawlWebsiteId,
        url:crawl.StartingUrl,
        startDate: moment(crawl.Creation_Date).format('DD/MM/YYYY'),
        status:crawl.Done === 1 ? "Concluído" : "Em andamento",
        results: "N/A",
        websiteId: crawl.WebsiteId
      })));
    }
    fetchData();
  }, []);
  const { theme } = useTheme();
  const [data, setData] = useState(dataRows);
  const [checkboxesSelected, setCheckboxesSelected] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;
    const query = search.toLowerCase();
    const fieldsToSearch = ["url", "startDate", "status"]; // pesquisa por array de campos
    return data.filter((row) =>
      fieldsToSearch.some((key) => String(row[key] ?? "").toLowerCase().includes(query))
    );
  }, [data, search]);

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />
      <h1>{t('CRAWLER_PAGE.LIST.title')}</h1>
      <div className="content bg-white">
        <h2>{t('CRAWLER_PAGE.LIST.table.title')}</h2>
        <div className="d-flex gap-2 align-items-center mb-3">
          <span>{t('MISC.filter')}</span>
          <InputSearch
            darkTheme={theme}
            placeholder={t('MISC.filter') + '...'}
            label={t('MISC.filter')}
            id="search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="d-flex gap-4 justify-content-start mb-4">
          <Button
            darkTheme={theme}
            text={t('CRAWLER_PAGE.LIST.table.delete_crawlers')}
            className="btn-primary"
            onClick={() => console.log(t('CRAWLER_PAGE.LIST.table.create_button'))}
          />
        </div>
        
        <SortingTable
          darkTheme={theme}
          headers={directoriesHeaders}
          setDataList={setData}
          dataList={filteredData}
          columnsOptions={columnsOptions(navigate)}
          nextPage={() => null}
          caption={t('CRAWLER_PAGE.LIST.table.title')}
          iconsAltTexts={nameOfIcons}
          paginationButtonsTexts={paginationButtonsTexts}
          project={""}
          setCheckboxesSelected={setCheckboxesSelected}
        />
      </div>
    </div>
  );
} 