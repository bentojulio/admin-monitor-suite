const theme = "light"

export const dataHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "rank ", property: "title" },
    { type: "Link", nRow: 2, center: false, name: "Nome ", property: "name", justifyCenter: false },
    { type: "SortingText", nRow: 2, name: "Tipo", property: "type", justifyCenter: true },
  ],
];

export const columnsOptions = {
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  name: {
    type: "Link",
    center: false,
    bold: false,
    decimalPlace: false,
    href: (row) => "http://localhost:5173/dashboard/directories",
  },
  type: { type: "Text", center: true, bold: false, decimalPlace: true },
};

export const dataList = [
  {
    id: 22,
    name: "Portal Mais Transparência <code>teste</code>",
    type: "MyMonitor",
  },
  {
    id: 23,
    name: "Instituto da Segurança Social, I.P. - Portal Seg Social com o <title>",
    type: "MyMonitor",
  },
  {
    id: 31,
    name: "Portal do SNS 24",
    type: "AcessMonitor",
  },
  {
    id: 25,
    name: "Comissão Nacional de Eleições",
    type: "AcessMonitor",
  },
];

export const headersBarLine = ['[1 - 2[', '[2 - 3[', '[3 - 4[', '[4 - 5[', '[5 - 6[', '[6 - 7[', '[7 - 8[', '[8 - 9[', '[9 - 10[']



export const barData = {
  labels: headersBarLine,
  datasets: [
    {
      type: 'line',
      label: "Percentagem(nº de páginas)",
      data: [1, 2, 3,0,0,0, 10],
      backgroundColor: 'rgba(51, 51, 153, 1)',
      borderColor: 'rgba(51, 51, 153, 1)',
      borderWidth: 2,
      fill: false,
      tension: 0,
      pointBackgroundColor: 'red', // Set the color of the dots
      pointBorderColor: 'red',
    },
    {
      type: 'bar',

      label: "Frequência (nº de páginas)",
    data: [1, 2, 3, 1,0,0,0, 10],
      backgroundColor: [
        '#e90018',
        '#e90018',
        '#f38e10',
        '#f38e10',
        '#f3d609',
        '#f3d609',
        '#f3d609',
        '#15ac51',
        '#15ac51'
      ],
      borderWidth: 1,
    },
  ],
};
// ... existing code ...
export const optionsHorizontalBar = {
  indexAxis: 'y', // This makes the bar chart horizontal
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of the legend text
      }
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Teste de label 1",
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of Title on X axis
        font: {
          size: 14
        }
      },
      ticks: {
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white' // Color of Text on X axis
      },
      grid: {
        color: theme === "light" ? 'rgba(0,0,0, 0.1)' : 'rgba(255, 255, 255, 0.2)' // Color of Dividers vertically
      }
    },
    y: {
      title: {
        display: true,
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of Title on Y axis
        font: {
          size: 14
        }
      },
      ticks: {
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white', // Color of Text on Y axis
        
      },
      grid: {
        color: theme === "light" ? 'rgba(0,0,0, 0.1)' : 'rgba(255, 255, 255, 0.2)' // Color of Dividers horizontaly
      }
    }
  }
};

export const barOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white',
      }
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Teste de label 1",
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white',
        font: {
          size: 14
        }
      },
      ticks: {
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white'
      },
      grid: {
        color: theme === "light" ? 'rgba(0,0,0, 0.1)' : 'rgba(255, 255, 255, 0.2)'
      }
    },
    y: {
      title: {
        display: true,
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white',
        font: {
          size: 14
        }
      },
      ticks: {
        color: theme === "light" ? 'rgba(0,0,0, 1)' : 'white',
      },
      grid: {
        color: theme === "light" ? 'rgba(0,0,0, 0.1)' : 'rgba(255, 255, 255, 0.2)'
      }
    }
  }
};
// ... existing code ...

