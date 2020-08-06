import React from 'react';
import { Table } from 'element-react';
import { columns } from '../../const';

const DataTable = ({ columns, data, handleOnSortChange }) => 
  <Table
    columns={columns}
    data={data}
    onSortChange={handleOnSortChange}
  />

DataTable.defaultProps = {
  columns,
  data: [],
}

export default DataTable;