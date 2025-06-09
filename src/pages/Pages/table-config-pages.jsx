export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "rank ", property: "title" },
    { type: "SortingText", nRow: 2, name: "URL ", property: "url" },
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
      name: "Última avaliação",
      property: "lastavaliation",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "Nº elementos",
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
      name: "Estado",
      property: "state",
      justifyCenter: true,
    },

    {
      type: "SortingText",
      nRow: 2,
      name: "Observatório",
      property: "observatory",
      justifyCenter: true,
    },
  ],
];

export const columnsOptions = {
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  title: { type: "Text", center: false, bold: false, decimalPlace: false }, // Checkbox
  url: { type: "Text", center: false, bold: false, decimalPlace: false },
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
  state: { type: "Text", center: true, bold: false, decimalPlace: false },
  observatory: { type: "Text", center: true, bold: false, decimalPlace: false },
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
    title: "",
    url: "https://exemplo.pt",
    point: "82.5",
    lastavaliation: "05/06/2025",
    elementnumber: 134,
    a: 10,
    aa: 8,
    aaa: 5,
    state: "Conforme",
    observatory: <input type="checkbox" />,
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
