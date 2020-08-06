import React from 'react';
import DataTable from '../../components/DataTable';
import { Pagination, Input } from 'element-react';
import { getContacts } from '../../api';
import { getAge } from '../../utils';
import {
  defaultPageNumber,
  defaultPageSize,
  pageLayoutText,
  SEARCH_PLACEHOLDER
} from '../../const';

const ContactsTableScreen = () => {
  const [userData, setUserData] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(defaultPageNumber);
  const [sortColumnName, setColumnName] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('');
  const [keywords, setKeywords] = React.useState('');
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    getContacts({ pageNumber, pageSize: defaultPageSize, sortColumnName, sortOrder, keywords })
      .then(handleGetContactsSuccess)
      .catch(handleGetContactsError);
  }, [pageNumber, sortColumnName, sortOrder, keywords]);

  const handlePageChange = (number) => {
    setPageNumber(number);
  }

  const handleOnSortChange = (column, order) => {
    const columnName = column === 'age' ? 'BirthDate' : column;
    setColumnName(columnName)
    setSortOrder(order);
  }

  const handleOnSearchChange = (text) => {
    setKeywords(text);
  }

  const handleGetContactsSuccess = (res) => {
    const userData = res.contacts.map(item => ({ ...item, age: getAge(item.BirthDate)}));

    setTotal(res.count);
    setUserData(userData);
  }

  const handleGetContactsError = (err) => {
    console.log('Err: ', err);
  }

  return (
    <div className="App">
      <Input
        placeholder={SEARCH_PLACEHOLDER}
        onChange={handleOnSearchChange}
      />
      <DataTable
        data={userData}
        handleOnSortChange={handleOnSortChange}
      />
      <Pagination
        total={Number(total)}
        layout={pageLayoutText}
        onCurrentChange={(pageNumber) => handlePageChange(pageNumber)}
      />
    </div>
  );
}

export default ContactsTableScreen;
