import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
  font-size: 30px;
`;

const StyledTd = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
  background-color: #f2f2f2;
  font-size: 29px;
`;

const ScrollableContainer = styled.div`
  height: 80vh;
  overflow: auto;
`;

const Table = ({ data, transpose }) => {
  const processedData = data.map(item => ({
    ...item,
    ...item['Big 5 personality distribution'],
  }));

  const columns = React.useMemo(
    () =>
      data && data.length > 0
        ? Object.keys(processedData[0])
            .filter(key => key !== 'Big 5 personality distribution') // Filter out the undesired column
            .map(key => ({
                Header: key.split(/(?=[A-Z])/).join(' '),
                accessor: key,
            }))
        : [],
    [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: processedData });

  if (transpose) {
    return (
      <ScrollableContainer>
        <StyledTable {...getTableProps()}>
          <tbody {...getTableBodyProps()}>
            {headerGroups[0].headers.map(column => (
              <tr key={column.id}>
                <StyledTh>{column.render('Header')}</StyledTh>
                {rows.map(row => (
                  <StyledTd key={`${column.id}-${row.id}`}>{typeof row.values[column.id] === 'object' ? JSON.stringify(row.values[column.id]) : row.values[column.id]}</StyledTd>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </ScrollableContainer>
    );
  }

  return (
    <ScrollableContainer>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <StyledTh {...column.getHeaderProps()}>{column.render('Header')}</StyledTh>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <StyledTd {...cell.getCellProps()}>{typeof cell.value === 'object' ? JSON.stringify(cell.value) : cell.render('Cell')}</StyledTd>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </ScrollableContainer>
  );
};

export default Table;
