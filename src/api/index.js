export const getContacts = async ({
  pageNumber, pageSize, sortColumnName = '', sortOrder = '', keywords = ''
}) => (await fetch(`/contacts?pageNumber=${pageNumber}&pageSize=${pageSize}
  &sortOrder=${sortOrder}&sortColumnName=${sortColumnName}&keywords=${keywords}`)).json();

export const getContactDetails = async (userId) => (await fetch(`/details/${userId}`)).json();