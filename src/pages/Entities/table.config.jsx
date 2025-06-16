export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "Selecionar", property: "id", label:"Selecionar"},
    {
      type: "SortingText",
      nRow: 2,
      name: "Nome abreviado",
      property: "shortName",
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Nome completo",
      property: "fullName",
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Data de criação",
      property: "createdAt",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Nº de Sítios web",
      property: "websiteCount",
      justifyCenter: true,
    },
    {
      type: "Action",
      nRow: 2,
      name: "Editar",
      property: "edit",
      justifyCenter: true,
    },
  ],
];

export const columnsOptions = {
  id: { type: "Checkbox", center: true, bold: false, decimalPlace: false, label:"Selecionar"},
  shortName: { type: "Text", center: false, bold: false, decimalPlace: false },
  fullName: { type: "Text", center: false, bold: false, decimalPlace: false },
  createdAt: { type: "Text", center: true, bold: false, decimalPlace: false },
  websiteCount: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  edit: { type: "Action", center: true, bold: false, decimalPlace: false },
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
    id: 1,
    shortName: "AMA",
    fullName: "Agência para a Modernização Administrativa",
    createdAt: "2023-01-15",
    websiteCount: 5,
    edit: "Editar",
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
