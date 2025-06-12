import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, StatisticsHeader, Breadcrumb } from "ama-design-system";
import { BarLineGraphTabs } from "../../components/BarLineGraph";
import { RadarGraph } from "../../components/RadarGraph";
import GoodBadTab from "../../components/GoodBadTab/GoodBadTab";
import { useTheme } from "../../context/ThemeContext";
import ContentListWebSites from "../Websites/components/ContentListWebSites";
import { useWebsites } from "../../hooks/useWebsites";
import { useCategories } from "../../hooks/useCategories";
import { useCompliance } from "../../hooks/useCompliance";
import { useStatistics } from "../../hooks/useStatistics";
import { 
  barData,
  barOptions,
  dataHeaders as dataHeadersBar,
  columnsOptions as columnsOptionsBar,
  dataList as dataListBar
 } from "../../components/BarLineGraph/table.config.jsx";
const ViewCategories = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { websites, loading: websitesLoading } = useWebsites();
  const { categories, loading: categoriesLoading } = useCategories();
  const { compliance, loading: complianceLoading } = useCompliance();
  const { statistics, loading: statisticsLoading } = useStatistics();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedWebsite(null);
    setSelectedPage(null);
  };

  const handleWebsiteSelect = (website) => {
    setSelectedWebsite(website);
    setSelectedPage(null);
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };

  const handleBack = () => {
    if (selectedPage) {
      setSelectedPage(null);
    } else if (selectedWebsite) {
      setSelectedWebsite(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const isLoading =
    websitesLoading ||
    categoriesLoading ||
    complianceLoading ||
    statisticsLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumb
          darkTheme={theme === 'dark'}
          items={[
            { label: "Categories", path: "/categories" },
            ...(selectedCategory
              ? [{ label: selectedCategory.name, path: null }]
              : []),
            ...(selectedWebsite
              ? [{ label: selectedWebsite.name, path: null }]
              : []),
            ...(selectedPage ? [{ label: selectedPage.name, path: null }] : []),
          ]}
        />
        {(selectedCategory || selectedWebsite || selectedPage) && (
          <Button
            variant="secondary"
            onClick={handleBack}
            darkTheme={theme === 'dark'}
          >
            Back
          </Button>
        )}
      </div>

      {!selectedCategory && !selectedWebsite && !selectedPage && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatisticsHeader
              darkTheme={theme === 'dark'}
              title="Total Categories"
              value={categories.length}
              icon="folder"
            />
            <StatisticsHeader
              darkTheme={theme === 'dark'}
              title="Total Websites"
              value={websites.length}
              icon="globe"
            />
            <StatisticsHeader
              darkTheme={theme === 'dark'}
              title="Total Pages"
              value={websites.reduce((acc, site) => acc + site.pages.length, 0)}
              icon="file"
            />
            <StatisticsHeader
              darkTheme={theme === 'dark'}
              title="Compliance Score"
              value={`${compliance.score}%`}
              icon="check-circle"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Category Distribution</h2>
              <BarLineGraphTabs
                darkTheme={theme === 'dark'}
                barData={barData}
                barOptions={barOptions}
                dataHeaders={dataHeadersBar}
                dataList={dataListBar}
                columnsOptions={columnsOptionsBar}
              />
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Compliance Overview</h2>
              <RadarGraph
                darkTheme={theme === 'dark'}
                data={compliance.radarData}
                options={compliance.radarOptions}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Category Performance</h2>
            <GoodBadTab
              darkTheme={theme === 'dark'}
              data={statistics.categoryPerformance}
            />
          </div>
        </>
      )}

      <div className="mt-6">
        <ContentListWebSites
          darkTheme={theme === 'dark'}
          websites={websites}
          categories={categories}
          selectedCategory={selectedCategory}
          selectedWebsite={selectedWebsite}
          selectedPage={selectedPage}
          onCategorySelect={handleCategorySelect}
          onWebsiteSelect={handleWebsiteSelect}
          onPageSelect={handlePageSelect}
        />
      </div>
    </div>
  );
};

export default ViewCategories;