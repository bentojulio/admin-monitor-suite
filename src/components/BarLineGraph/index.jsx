import React, {useMemo} from "react";
import { Tabs, SortingTable } from "ama-design-system";
import { Bar } from "react-chartjs-2";


export function BarLineGraphTabs({ columnsOptions, dataList, dataHeaders, barData, barOptions}) {
    const memoBarData = useMemo(() => barData, [barData]);
  const memoBarOptions = useMemo(() => barOptions, [barOptions]);

  const tabs = [
    {
      eventKey: "tab1",
      title: "Gráfico",
      component: (
        <div style={{ padding: 20 }}>
          <Bar data={memoBarData} options={memoBarOptions} aria-label="Bar Chart" />
        </div>
      ),
    },
    {
      eventKey: "tab2",
      title: "Tabela",
      component: (
        <SortingTable
          hasSort={false}
          headers={dataHeaders}
          dataList={dataList}
          darkTheme={false}
          pagination={false}
          links={false}
          caption="Table Caption"
          columnsOptions={columnsOptions}
        />
      ),
    },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].eventKey);

  return (
    <>
      <Tabs tabs={tabs} defaultActiveKey={"tab1"}/>
    </>
  );
}
