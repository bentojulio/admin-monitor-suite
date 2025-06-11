// headers da tabela

const theme = "light"

export const directoriesHeaders = [
  [
    {type: "Checkbox", nRow: 2, name: "rank ", property: "title"},
    {type: "SortingText", nRow: 2, name: "Email ", property: "email"},
    {type: "SortingText", nRow: 2, name: "Nome do usuário", property: "username", justifyCenter: true},
    {type: "SortingText", nRow: 2, name: "Tipo", property: "type", justifyCenter: true},
  ]
]

export const columnsOptions = {
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  email: { type: "Text", center: false, bold: false, decimalPlace: false },
  username: { type: "Text", center: false, bold: false, decimalPlace: false },
  type: { type: "Text", center: true, bold: false, decimalPlace: true },
 }

export const nameOfIcons = [
  "Selo Bronze",
  "Selo Prata",
  "Selo Ouro",
  "Declaração não conforme",
  "Declaração parcialmente conforme",
  "Declaração plenamente conforme"
]

export const paginationButtonsTexts = [
  "Primeira página",
  "Página anterior",
  "Página seguinte",
  "Última página"
]

export const nItemsPerPageText=[
  "Ver ",
  " itens por página"
]

export const itemsPaginationText = [
  " de ",
  " itens"
]


export const dataRows = [
  {
    "id": 22,
    "email": "Portal Mais Transparência <code>teste</code>",
    "username": "Agência para a Modernização Administrativa",
    "type": "MyMonitor",

  },
  {
    "id": 23,
    "email": "Instituto da Segurança Social, I.P. - Portal Seg Social com o <title>",
    "username": "Instituto da Segurança Social, I.P.",
    "type": "MyMonitor",
  },
  {
    "id": 31,
    "email": "Portal do SNS 24",
    "username": "Serviços Partilhados do Ministério da Saúde, E.P.E.",
    "type": "AcessMonitor",
  },
  {
    "id": 25,
    "email": "Comissão Nacional de Eleições",
    "username": "Comissão Nacional de Eleições",
    "type": "AcessMonitor",
  }
]

export const options = [
  {
    id: "1",
    title:
      "I found 1 image on the page without the alternative text equivalent.",
    component: (
      <div>
        Check if the alternative text equivalent found in the images provides
        equal information or function as the one performed by the image on the
        page. H37: Using alt attributes on img elements This WCAG 2.1
        technique is related to: Success criteria 1.1.1 (Level A) Notions
        about the SC 1.1.1
      </div>
    ),
    lvl: "AA",
    iconName: "AMA-Middle-Line",
    ele: "test",
    tdClassName: "warning-cell"
  },
];
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

export const barData = {
  labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10'],
  datasets: [
    {
      label: 'Número de páginas',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
};

export const horizontalData = {
  labels: [
    "Verifiquei que <mark>todos</mark> os elementos <code>&lt;li&gt;</code> estão contidos dentro de uma lista.",
    "Verifiquei que <mark>todas</mark> as ligações têm nome acessível.",
    "Constatei que nesta página <mark>não há</marks> atributos <code>id</code> repetidos.",
    "Verifiquei que <mark>todas</mark> as listas só contêm itens de lista.",
    "Constatei que todos os elementos com um papel semântico que confere aos seus descendentes um papel decorativo, não têm descendentes focáveis",
    "Verifiquei que <mark>todos</mark> os atributos aria-* estão de acordo com a especificação ARIA.",
    "Verifiquei que <mark>todos</mark> os estados e todas as propriedades ARIA têm um tipo de valor válido.",
    "Verifiquei que <mark>todos</mark> os estados e todas as propriedades ARIA são permitidos.",
    "Não encontrei elementos marcados como decorativos que tenham sido expostos a Tecnologias de Apoio",
    "Verifiquei que <mark>todos</mark> os atributos <code>role</code> têm um valor válido"
  ],
  datasets: [
    {
      type: 'bar',
      label: "teste de label",
      data: [
        42,
        39,
        22,
        42,
        41,
        42,
        42,
        41,
        37,
        3
      ],
      backgroundColor: "green",
      borderWidth: 0,
    }
  ]
};