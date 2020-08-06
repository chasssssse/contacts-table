export const getContacts = async ({
  pageNumber, pageSize, sortColumnName = '', sortOrder = '', keywords = ''
}) => (await fetch(`/contacts?pageNumber=${pageNumber}&pageSize=${pageSize}
  &sortOrder=${sortOrder}&sortColumnName=${sortColumnName}&keywords=${keywords}`)).json();