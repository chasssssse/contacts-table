import React from 'react';
import './App.css';
import DataTable from './components/DataTable';
import { Pagination, Input } from 'element-react';
import { getContacts } from './api';
import { getAge } from './utils';
import {
  defaultPageNumber,
  defaultPageSize,
  pageLayoutText,
  searchPlaceholder
} from './const';

function App() {
  const [userData, setUserData] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(defaultPageNumber);
  const [sortColumnName, setColumnName] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('');
  const [keywords, setKeywords] = React.useState('');

  React.useEffect(() => {
    getContacts({ pageNumber, pageSize: defaultPageSize, sortColumnName, sortOrder, keywords })
      .then(handleGetContactsSuccess);
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
    const userData = res.data.map(item => ({ ...item, age: getAge(item.BirthDate)}));
    setUserData(userData);
  }

  return (
    <div className="App">
      <Input
        placeholder={searchPlaceholder}
        onChange={handleOnSearchChange}
      />
      <DataTable
        data={userData}
        handleOnSortChange={({ prop, order }) => {
          handleOnSortChange(prop, order);
        }}
      />
      <Pagination
        total={100}
        layout={pageLayoutText}
        onCurrentChange={(pageNumber) => handlePageChange(pageNumber)}
      />
    </div>
  );
}

export default App;
