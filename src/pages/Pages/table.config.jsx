export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2,center: true, name: "Selecionar ", property: "id", label:"Selecionar"},
    { type: "SortingText", nRow: 2, center: true, name: "URL ", property: "url" },
    { type: "SortingText", nRow: 2, center: true, name: "Título", property: "title" },
    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "Pontuação",
      property: "point",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "Última avaliação",
      property: "lastavaliation",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "Nº elementos",
      property: "elementnumber",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "A",
      property: "a",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "AA",
      property: "aa",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "AAA",
      property: "aaa",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      center: true,
      name: "Observatório",
      property: "observatory",
      justifyCenter: true,
      label:"Observatório"
    },
  ],
];

export const columnsOptions = {
  id: { type: "Checkbox", center: true, bold: false, decimalPlace: false, label:"Selecionar"},
  title: { type: "Text", center: true, bold: false, decimalPlace: false }, // Checkbox
  url: { type: "Link", center: true, bold: false, decimalPlace: false, href: (row) => "http://localhost:5173/dashboard/pages/view/" + row.title },
  point: { type: "Text", center: true, bold: false, decimalPlace: true },
  lastavaliation: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  elementnumber: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  a: { type: "Text", center: true, bold: false, decimalPlace: false },
  aa: { type: "Text", center: true, bold: false, decimalPlace: false },
  aaa: { type: "Text", center: true, bold: false, decimalPlace: false },
  observatory: { type: "Checkbox", center: true, bold: false, decimalPlace: false, label:"Observatório"},
};

export const nameOfIcons = [
  "Selo Bronze",
  "Selo Prata",
  "Selo Ouro",
  "Declaração não conforme",
  "Declaração parcialmente conforme",
  "Declaração plenamente conforme",
];

export const paginationButtonsTexts = [
  "Primeira página",
  "Página anterior",
  "Página seguinte",
  "Última página",
];

export const nItemsPerPageText = ["Ver ", " itens por página"];

export const itemsPaginationText = [" de ", " itens"];

export const dataRows = [
  {
    id: "1",
    title: "Página 1",
    url: "exemplo.pt",
    point: "82.5",
    lastavaliation: "05/06/2025",
    elementnumber: 134,
    a: 10,
    aa: 8,
    aaa: 5,
    observatory: "",
  },
  {
    id: "2",
    title: "Página 2",
    url: "exemplo.pt",
    point: "82.5",
    lastavaliation: "05/06/2025",
    elementnumber: 134,
    a: 10,
    aa: 8,
    aaa: 5,
    observatory: "",
  },
];

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


export const directoriesHeadersPage = [
  [
    { type: "Checkbox", nRow: 2, name: "rank ", property: "title" },
    { type: "SortingText", nRow: 2, name: "Data avaliação ", property: "date_avaliation" },
    {
      type: "SortingText",
      nRow: 2,
      name: "Pontuação",
      property: "point",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "Elementos HTML",
      property: "elementnumber",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "A",
      property: "a",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "AA",
      property: "aa",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "AAA",
      property: "aaa",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "Ver relatório",
      property: "state",
      justifyCenter: true,
    },

  ],
];

export const columnsOptionsPage = {
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  title: { type: "Text", center: false, bold: false, decimalPlace: false }, // Checkbox
  date_avaliation: { type: "Text", center: false, bold: false, decimalPlace: false },
  point: { type: "Text", center: true, bold: false, decimalPlace: true },

  elementnumber: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  a: { type: "Text", center: true, bold: false, decimalPlace: false },
  aa: { type: "Text", center: true, bold: false, decimalPlace: false },
  aaa: { type: "Text", center: true, bold: false, decimalPlace: false },
  state: { type: "Link", center: true, bold: false, decimalPlace: false },
};




export const dataRowsPage = [
  {
    title: "",
    date_avaliation: "05/06/2025",
    point: "8.5",
    elementnumber: 134,
    a: 10,
    aa: 8,
    aaa: 5,
    state: "Relatório",
  },
];

export const optionsPage = [
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

