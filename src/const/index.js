const defaultPageNumber = 1;
const defaultPageSize = 10;
const pageLayoutText = "prev, pager, next"
const columns = [
  { label: 'Title', prop: 'Title', headerAlign: 'center', sortable: 'custom' },
  { label: 'Name', prop: 'Name', headerAlign: 'center', sortable: 'custom' },
  { label: 'Age', prop: 'age', headerAlign: 'center', sortable: 'custom' },
  { label: 'Favorite Flag', prop: 'IsFavorite', headerAlign: 'center', sortable: 'custom' },
  { label: 'Contact Detail Count', prop: 'detailCount', headerAlign: 'center', sortable: 'custom' }
];
const searchPlaceholder = 'Search';

export {
  defaultPageNumber,
  defaultPageSize,
  pageLayoutText,
  columns,
  searchPlaceholder
}