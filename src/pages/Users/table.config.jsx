import i18n from '../../i18n';

export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: i18n.t('MISC.select'), property: "id", label: i18n.t('MISC.select') },
    { type: "SortingText", nRow: 2, name: i18n.t('USERS_PAGE.LIST.table.username_label'), property: "Username" },
    { type: "SortingText", nRow: 2, name: i18n.t('USERS_PAGE.LIST.table.app_label'), property: "Type" },
    { type: "SortingText", nRow: 2, name: i18n.t('USERS_PAGE.LIST.table.websites_label'), property: "Websites", justifyCenter: true },
    { type: "SortingText", nRow: 2, name: i18n.t('USERS_PAGE.LIST.table.register_label'), property: "Register_Date", justifyCenter: true },
    { type: "SortingText", nRow: 2, name: i18n.t('USERS_PAGE.LIST.table.last_login_label'), property: "Last_Login", justifyCenter: true },
    { type: "SortingText", nRow: 2, name: i18n.t('USERS_PAGE.LIST.table.edit_label'), property: "edit", justifyCenter: true },
  ],
];

export const columnsOptions = (navigate)=>({
  id: { type: "Checkbox", center: false, bold: false, decimalPlace: false },
  Username: { type: "Text", center: false, bold: false, decimalPlace: false },
  Type: { type: "Text", center: false, bold: false, decimalPlace: false },
  Websites: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  Register_Date: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  Last_Login: {
    type: "Text",
    center: true,
    bold: false,
    decimalPlace: false,
  },
  edit: { type: "Button",text:i18n.t('USERS_PAGE.LIST.table.edit_label'), onClick: (row)=>{navigate(`${import.meta.env.VITE_ROUTE_URL}dashboard/users/edit/${row.id}`)}, center: true, bold: false, decimalPlace: false },
});

export const dataRows = [
  {
    id: 1,
    Username: "Joana Costa",
    Type: "MyMonitor",
    Websites: 4,
    Register_Date: "2023-11-01",
    Last_Login: "2024-10-25",
    edit: i18n.t('USERS_PAGE.LIST.table.edit_label'),
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
  i18n.t('FIRST_PAGE_LABEL'),
  i18n.t('PREVIOUS_PAGE_LABEL'),
  i18n.t('NEXT_PAGE_LABEL'),
  i18n.t('LAST_PAGE_LABEL'),
];

export const nItemsPerPageText = [i18n.t('ITEMS_PER_PAGE_LABEL')];

export const itemsPaginationText = [i18n.t('RANGE_PAGE_LABEL_1'), i18n.t('RANGE_PAGE_LABEL_2')];

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
