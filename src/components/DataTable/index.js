import React from 'react';
import { Table } from 'element-react';
import { Link } from 'react-router-dom';

const columns = [
  { label: 'Title', prop: 'Title', headerAlign: 'center', sortable: 'custom' },
  { label: 'Name', prop: 'Name', headerAlign: 'center', sortable: 'custom' },
  { label: 'Age', prop: 'age', headerAlign: 'center', sortable: 'custom' },
  { label: 'Favorite Flag', prop: 'IsFavorite', headerAlign: 'center', sortable: 'custom' },
  { label: 'Contact Detail Count', prop: 'detailCount', 
    headerAlign: 'center', sortable: 'custom',
    render: (props) => <Link to={`/details/${props.UserID}`}>{props.detailCount}</Link>
  }
];

const DataTable = ({ columns, data, handleOnSortChange }) => 
  <Table
    columns={columns}
    data={data}
    onSortChange={({ prop, order }) => handleOnSortChange(prop, order)}
  />

DataTable.defaultProps = {
  columns,
  data: [],
}

export default DataTable;