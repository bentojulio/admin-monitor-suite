// headers da tabela
export const directoriesHeaders = [
  [
    { type: "Checkbox", nRow: 2, name: "Selecionar", property: "id" },
    { type: "SortingText", nRow: 2, name: "Nome", property: "username" },
    { type: "SortingText", nRow: 2, name: "URL inicial", property: "url" },
    {
      type: "SortingText",
      nRow: 2,
      name: "Nº de páginas",
      property: "pages",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Data de criação",
      property: "createdAt",
      justifyCenter: true,
    },
    {
      type: "Action",
      nRow: 2,
      name: "Editar",
      property: "edit",
      justifyCenter: true,
    },
    {
      type: "SortingText",
      nRow: 2,
      name: "Selos digitais",
      property: "badges",
    },
  ],
];

// opções de renderização de colunas
export const columnsOptions = {
  id: { type: "Text", center: true, bold: false, decimalPlace: false },
  username: { type: "Text", center: false, bold: false, decimalPlace: false },
  url: { type: "Text", center: false, bold: false, decimalPlace: false },
  pages: { type: "Text", center: true, bold: false, decimalPlace: false }, // alinhado ao centro
  createdAt: { type: "Text", center: true, bold: false, decimalPlace: false }, // alinhado ao centro
  edit: { type: "Action", center: true, bold: false, decimalPlace: false },
  badges: { type: "Text", center: false, bold: false, decimalPlace: false },
};

// ícones possíveis (não usados diretamente aqui, mas podem ser úteis no futuro)
export const nameOfIcons = [
  "Selo Bronze",
  "Selo Prata",
  "Selo Ouro",
  "Declaração não conforme",
  "Declaração parcialmente conforme",
  "Declaração plenamente conforme",
];

// textos de paginação
export const paginationButtonsTexts = [
  "Primeira página",
  "Página anterior",
  "Página seguinte",
  "Última página",
];

export const nItemsPerPageText = ["Ver ", " itens por página"];

export const itemsPaginationText = [" de ", " itens"];

// dados da tabela (apenas uma linha como exemplo)
export const dataRows = [
  {
    id: "", // utilizado pelo checkbox
    username: "Agência para a Modernização",
    url: "https://exemplo.pt",
    pages: 18,
    createdAt: "05/06/2025",
    edit: "Editar", // usado pelo botão de ação
    badges: "Selo Ouro",
  },
];

// opções adicionais se aplicável
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
