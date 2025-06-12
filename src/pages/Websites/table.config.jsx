// headers da tabela

const theme = "light"

export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "Selecionar", property: "id" },
    { type: "SortingText", nRow: 2, name: "Nome", property: "name" },
    { type: "SortingText", nRow: 2, name: "URL inicial", property: "url" },
    {
      type: "SortingText",
      nRow: 2,
      name: "Nº de páginas",
      property: "pages",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Data de criação",
      property: "createdAt",
      justifyCenter: true,
    },
    {
      type: "Action",
      nRow: 2,
      name: "Editar",
      property: "edit",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Selos digitais",
      property: "badges",
    },
  ],
];

// opções de renderização de colunas
export const columnsOptions = {
  id: { type: "Checkbox", center: true, bold: false, decimalPlace: false },
  name: { type: "Link", center: false, bold: false, decimalPlace: false, href: (row)=>{
    return `http://localhost:5173/dashboard/websites/view/${row.name}`
  } },
  url: { type: "Text", center: false, bold: false, decimalPlace: false },
  pages: { type: "Text", center: true, bold: false, decimalPlace: false }, // alinhado ao centro
  createdAt: { type: "Text", center: true, bold: false, decimalPlace: false }, // alinhado ao centro
  edit: { type: "Action", center: true, bold: false, decimalPlace: false },
  badges: { type: "Text", center: false, bold: false, decimalPlace: false },
};

// ícones possíveis (não usados diretamente aqui, mas podem ser úteis no futuro)
export const nameOfIcons = [
  "Selo Bronze",
  "Selo Prata",
  "Selo Ouro",
  "Declaração não conforme",
  "Declaração parcialmente conforme",
  "Declaração plenamente conforme",
];

// textos de paginação
export const paginationButtonsTexts = [
  "Primeira página",
  "Página anterior",
  "Página seguinte",
  "Última página",
];

export const nItemsPerPageText = ["Ver ", " itens por página"];

export const itemsPaginationText = [" de ", " itens"];

// dados da tabela (apenas uma linha como exemplo)
export const dataRows = [
  {
    id: "", // utilizado pelo checkbox
    name: "Agência para a Modernização",
    url: "https://exemplo.pt",
    pages: 18,
    createdAt: "05/06/2025",
    edit: "Editar", // usado pelo botão de ação
    badges: "Selo Ouro",
  },
];

// opções adicionais se aplicável
export const options = [
  {
    id: "1",
    title:
      "I found 1 image on the page without the alternative text equivalent.",
    component: (
      <div>
        Check if the alternative text equivalent found in the images provides
        equal information or function as the one performed by the image on the
        page. H37: Using alt attributes on img elements This WCAG 2.1 technique
        is related to: Success criteria 1.1.1 (Level A) Notions about the SC
        1.1.1
      </div>
    ),
    lvl: "AA",
    iconName: "AMA-Middle-Line",
    ele: "test",
    tdClassName: "warning-cell",
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