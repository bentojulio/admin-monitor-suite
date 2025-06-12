

export const directoriesHeaders = [
  [
    {type: "SortingText", nRow: 2, name: "Nome", property: "Nome"},
    {type: "SortingText", nRow: 2, name: "Nº sítios Web", property: "numberSites", justifyCenter: true},
    {type: "Checkbox", nRow: 2, name: "Seleção ", property: "selection", justifyCenter: true},
  ]
]

export const columnsOptions = {
  name: { type: "Link", center: false, bold: false, decimalPlace: false, href: (row) => {
    return `http://localhost:5173/dashboard/categories/view/${row.name}`
  } },
  numberSites: { type: "Text", center: false, bold: false, decimalPlace: false },
  selection: { type: "Checkbox", center: true, bold: false, decimalPlace: true },
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
    "name": "Portal Mais Transparência",
    "numberSites": "12",
    "selection": "MyMonitor",

  },
  {
    "name": "Instituto da Segurança Social, I.P. - Portal Seg Social com o <title>",
    "numberSites": "24",
    "selection": "MyMonitor",
  },
  {
    "name": "Portal do SNS 24",
    "numberSites": "23",
    "selection": "AcessMonitor",
  },
  {
    "name": "Comissão Nacional de Eleições",
    "numberSites": "64",
    "selection": "AcessMonitor",
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
