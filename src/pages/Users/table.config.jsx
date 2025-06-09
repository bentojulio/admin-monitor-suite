export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "Selecionar", property: "id" },
    { type: "SortingText", nRow: 2, name: "Nome", property: "name" },
    { type: "SortingText", nRow: 2, name: "Aplicação", property: "app" },
    {
      type: "SortingText",
      nRow: 2,
      name: "Nº de sítios web",
      property: "websiteCount",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Data de registo",
      property: "registeredAt",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Última emissão",
      property: "lastEmission",
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
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  name: { type: "Text", center: false, bold: false, decimalPlace: false },
  app: { type: "Text", center: false, bold: false, decimalPlace: false },
  websiteCount: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  registeredAt: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  lastEmission: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  edit: { type: "Action", center: true, bold: false, decimalPlace: false },
};

export const dataRows = [
  {
    id: 1,
    name: "Joana Costa",
    app: "MyMonitor",
    websiteCount: 4,
    registeredAt: "2023-11-01",
    lastEmission: "2024-10-25",
    edit: "Editar",
  },
];

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
