export const directoriesHeaders = [
  [
    { type: "SortingText", nRow: 2, name: "Práticas ", property: "name", justifyCenter: false },
    { type: "SortingText", nRow: 2, name: "Práticas por páginas", property: "praticesPerPage", justifyCenter: true },
    { type: "SortingText", nRow: 2, name: "Páginas", property: "pages", justifyCenter: true },
    { type: "SortingText", nRow: 2, name: "Ocorrência", property: "occurences", justifyCenter: true },
    { type: "SortingText", nRow: 2, name: "Nível", property: "level", justifyCenter: true },
  ]
]

export const columnsOptions = {
  name: {
    type: "Link",
    center: true,
    bold: false,
    decimalPlace: false,
    href: (row) => "http://localhost:5173/dashboard/pages/view/" + row.name,
  },
  praticesPerPage: {
    type: "Text",   
    bold: false,
    decimalPlace: false,
    center: true
  },
  pages: {
    type: "Text",    
    bold: false,
    decimalPlace: false,
    center: true
  },
  occurences: {
    type: "Text",   
    bold: false,
    decimalPlace: false,
    center: true
  },
  level: {
    type: "Text",
    bold: false,
    decimalPlace: false,
    center: true
  }
};

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

export const nItemsPerPageText = [
  "Ver ",
  " itens por página"
]

export const itemsPaginationText = [
  " de ",
  " itens"
]


export const dataRows = [
  {
    "name": "Practice A",
    "praticesPerPage": "5",
    "pages": "10",
    "occurences": "50",
    "level": "A"
  },
  {
    "name": "Practice B",
    "praticesPerPage": "3",
    "pages": "15",
    "occurences": "45",
    "level": "AAA"
  },
  {
    "name": "Practice C",
    "praticesPerPage": "7",
    "pages": "8",
    "occurences": "56",
    "level": "AA"
  },
  {
    "name": "Practice D",
    "praticesPerPage": "4",
    "pages": "12",
    "occurences": "48",
    "level": "A"
  },
  {
    "name": "Practice E",
    "praticesPerPage": "6",
    "pages": 9,
    "occurences": 60,
    "level": "AAAA"
  }
]

export const dataHeadersBad = [
  [
    { type: "Checkbox", nRow: 2, name: "Selecionar ", property: "id" },
    { type: "SortingText", nRow: 2, name: "Nome ", property: "name", justifyCenter: false },
    { type: "SortingText", nRow: 2, name: "Tipo", property: "type", justifyCenter: true },
  ],
];

export const columnsOptionsBad = {
  id: { 
    type: "Checkbox", 
    center: true, 
    bold: false, 
    decimalPlace: false,
    property: "id"
  },
  name: {
    type: "Link",
    center: true,
    bold: false,
    decimalPlace: false,
    property: "name",
    href: (row) => "http://localhost:5173/dashboard/pages/view",
  },
  type: { 
    type: "Text", 
    center: true, 
    bold: false, 
    decimalPlace: false,
    property: "type"
  },
};

export const dataBad = [
  {
    id: 22,
    name: "Portal Mais Transparência",
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
