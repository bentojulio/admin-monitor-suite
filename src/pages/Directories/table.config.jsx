import i18n from '../../i18n';
const apiUrl = import.meta.env.VITE_API_URL;

export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2,center:true, name: i18n.t('MISC.rank'), property: "id" },
    { type: "SortingText", nRow: 2, center: true, name: i18n.t('DIRECTORIES_PAGE.LIST.table.name_label'), property: "name", justifyCenter: false },
    { type: "SortingText", nRow: 2,  center: true, name: i18n.t('DIRECTORIES_PAGE.LIST.table.type_label'), property: "type", justifyCenter: true },
  ]
]

export const columnsOptions = {
  id: { type: "Checkbox", center: false, bold: false, decimalPlace: false },
  name: {
    type: "Link", center: false, bold: false, decimalPlace: false, href: (row) => {
      return `${apiUrl}dashboard/directories/view/${row.name}`
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
  i18n.t('FIRST_PAGE_LABEL'),
  i18n.t('PREVIOUS_PAGE_LABEL'),
  i18n.t('NEXT_PAGE_LABEL'),
  i18n.t('LAST_PAGE_LABEL'),
]

export const nItemsPerPageText = [i18n.t('ITEMS_PER_PAGE_LABEL')]

export const itemsPaginationText = [i18n.t('RANGE_PAGE_LABEL_1'), i18n.t('RANGE_PAGE_LABEL_2')]

export const dataRows = [
  {
    "id": 22,
    "name": "Portal Mais Transparência",
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


