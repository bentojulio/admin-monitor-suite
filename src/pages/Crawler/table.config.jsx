// Table headers for SortingTable
import i18n from "../../i18n";

export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: i18n.t('CRAWLER_PAGE.LIST.table.select_label'), property: "id", label: i18n.t('CRAWLER_PAGE.LIST.table.select_label') },
    { type: "SortingText", nRow: 2, name: i18n.t('CRAWLER_PAGE.LIST.table.initial_url_label'), property: "url" },
    { type: "SortingText", nRow: 2, name: i18n.t('CRAWLER_PAGE.LIST.table.start_date_label'), property: "startDate" },
    { type: "SortingText", nRow: 2, name: i18n.t('CRAWLER_PAGE.LIST.table.status_label'), property: "status" },
    { type: "SortingText", nRow: 2, name: i18n.t('CRAWLER_PAGE.LIST.table.results_label'), property: "results" },
  ]
];

// Column rendering options
export const columnsOptions = {
  id: { type: "Checkbox", center: true, bold: false, decimalPlace: false },
  url: { type: "Text", center: false, bold: false, decimalPlace: false },
  startDate: { type: "Text", center: false, bold: false, decimalPlace: false },
  status: { type: "Text", center: false, bold: false, decimalPlace: false },
  results: { type: "Text", center: false, bold: false, decimalPlace: false },
};

// Mock data
export const dataRows = [
  {
    id: 1,
    url: "https://example.com",
    startDate: "2024-07-01",
    status: "completed",
    results: 42,
  },
  {
    id: 2,
    url: "https://another.com",
    startDate: "2024-07-02",
    status: "running",
    results: 10,
  },
];

// Icon alt texts and pagination (optional, can be empty or copied from other modules)
export const nameOfIcons = [];
export const paginationButtonsTexts = []; 