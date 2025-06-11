

export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "rank ", property: "id" },
    { type: "Link", nRow: 2, center: false, name: "Nome ", property: "name", justifyCenter: false },
    { type: "SortingText", nRow: 2, name: "Tipo", property: "type", justifyCenter: true },
  ]
]

export const columnsOptions = {
  id: { type: "Skip", center: false, bold: false, decimalPlace: false },
  name: {
    type: "Link", center: false, bold: false, decimalPlace: false, href: (row) => {
      return "http://localhost:5173/dashboard/websites/view"
    }
  },
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
    "id": 22,
    "name": "Portal Mais Transparência <code>teste</code>",
    "type": "MyMonitor",
  },
  {
    "id": 23,
    "name": "Instituto da Segurança Social, I.P. - Portal Seg Social com o <title>",
    "type": "MyMonitor",
  },
  {
    "id": 31,
    "name": "Portal do SNS 24",
    "type": "AcessMonitor",
  },
  {
    "id": 25,
    "name": "Comissão Nacional de Eleições",
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


