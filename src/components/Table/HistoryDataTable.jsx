import { useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import { HistoryDataTableToolbar } from './HistoryDataTableToolbar';
import { HistoryDataTableHead } from './HistoryDataTableHead';
import { HistoryDataTableBody } from './HistoryDataTableBody';
import { HistoryDataRow } from './HistoryDataRow';
import { tableRowMappingGenerator, historyDataHeadRow } from './tableUtils';

/**
 * ELF model history data table
 * - Table Toolbar
 * - Table Container
 *    - Table Head
 *    - Table Body
 * @param {*} props 
 * @returns Whole Table with data
 */
function HistoryDataTable(props) {
  const {
    tableId,
    title,
    bodyHeight,
    rows,
    headCells,
    setSelected,
    selected,
    checkboxSelection,
    initialOrder,
    fixedLatest = false,
  } = props;
  
  const initialState = {
    order: initialOrder || 'asc',
    orderBy: {
      name: 'date',
      type: 'date', // 'number' | 'date' | 'string'
    }
  }
  
  const [order, setOrder] = useState(initialState.order);
  const [orderBy, setOrderBy] = useState(initialState.orderBy);
  const tableRows = useMemo(
    () => rows.map(tableRowMappingGenerator) || [],
    [rows]
  );

  
  const setSelectedByTableId = (newSelected) => setSelected(tableId, newSelected);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy.name === property.name && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (checkboxSelection === false) return;

    if (event.target.checked) {
      setSelectedByTableId(tableRows);
      return;
    }
    setSelectedByTableId([]);
  };

  const handleItemSelect = (event, row) => {
    if (checkboxSelection === false) {
      return;
    }
    const { id } = row;

    const selectedIndex = selected.findIndex(item => item.id === id);
    let newSelected = [];

    if (selectedIndex === -1) {
      // unchecked => checked
      newSelected = newSelected.concat(selected, row);

    } else {
      // checked => unchecked
      newSelected = selected.filter(selected => selected.id !== id);
    }
    setSelectedByTableId(newSelected);
  };

  return (
    <HistoryDataTable.Container>
      <HistoryDataTable.Toolbar
        title={title}
        numSelected={selected.length}
      />
      <TableContainer sx={{ maxHeight: bodyHeight ? `calc(${bodyHeight} + 120px)` : '100%', overflowY: 'auto' }}>
        <Table
          stickyHeader
          size="medium"
          aria-labelledby="tableTitle"
          // sx={{ minWidth: 750 }}
        >
          <HistoryDataTable.Head
            headCells={headCells}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            rowCount={rows.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
            checkboxSelection={checkboxSelection}
          />
          <HistoryDataTable.Body
            tableId={tableId}
            headCells={headCells}
            tableRows={tableRows}
            order={order}
            orderBy={orderBy}
            selected={selected}
            onSelect={handleItemSelect}
            checkboxSelection={checkboxSelection}
            fixedLatest={fixedLatest}
          />
        </Table>
      </TableContainer>
    </HistoryDataTable.Container>
  );
};


HistoryDataTable.defaultProps = {
  rows: [],
  headCells: historyDataHeadRow,
  bodyHeight: '',
  checkboxSelection: false,
  selected: []
};

HistoryDataTable.propTypes = {  /**
  /*
  * Array of table rows
  */
  rows: PropTypes.array,
  initialOrder: PropTypes.oneOf(['asc', 'desc']),
}

HistoryDataTable.Row = HistoryDataRow;
HistoryDataTable.Head = HistoryDataTableHead;
HistoryDataTable.Body = HistoryDataTableBody;
HistoryDataTable.Toolbar = HistoryDataTableToolbar;

HistoryDataTable.Container = ({ children }) => {
  return (
    <Box sx={{ width: '100%', overflowY: 'auto' }}>
      <Paper sx={{ width: '100%' }} elevation={0}>
        {children}
      </Paper>
    </Box>
  )
}

export default HistoryDataTable;
