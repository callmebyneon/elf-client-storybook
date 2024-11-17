import TableBody from '@mui/material/TableBody';
import styled from '@emotion/styled';
import { getComparator } from './tableUtils';
import { PropTypes } from 'prop-types';
import { genTableRowsMapper } from './HistoryDataRow';

const EmptyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
`

export function HistoryDataTableBody({
  tableId, headCells, tableRows, order, orderBy, selected, onSelect, checkboxSelection, fixedLatest
}) {
  const isSelected = (id) => selected.findIndex(el => el.id === id) !== -1;

  const fixedRowData = (fixedLatest && tableRows.length > 0) ? tableRows.reduce((prev, curr) => {
    if (prev.round < curr.round) return curr;
    return prev
  }) : null;
  const tRows = (fixedLatest && fixedRowData) ? tableRows.filter(row => row.id !== fixedRowData.id) : tableRows;

  
  /* if you need to support IE11, you can use `stableSort(:107)` call with:
  stableSort(tableRows, getComparator(order, orderBy)) */
  const sortedTableRows = tRows.slice().sort(getComparator(order, orderBy));
  
  return (
    <TableBody>
      {(fixedLatest && tableRows.length > 0) ? [fixedRowData].map(genTableRowsMapper(isSelected, tableId, checkboxSelection, headCells, onSelect, { fixed: true })) : null}
      {(tableRows.length > 0 && sortedTableRows.length > 0)
        ? sortedTableRows.map(genTableRowsMapper(isSelected, tableId, checkboxSelection, headCells, onSelect))
        : <EmptyBox>- No more data -</EmptyBox>}
    </TableBody>
  );
}

HistoryDataTableBody.propTypes = {
  /**
   * Unique table id 
   */
  tableId: PropTypes.string.isRequired,
  /**
   * Array of table head cells
   * Ref: items from historyDataHeadRow
   */
  headCells: PropTypes.array,
  /**
   * Array of table rows to show
   */
  tableRows: PropTypes.array,
  /**
   * Order type
   */
  order: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Based on what the table be sorted by
   */
  orderBy: PropTypes.object,
  /**
   * Storage of selected rows by row id
   */
  selected: PropTypes.array,
  /**
   * Callback to be fire when select a row
   */
  onSelect: PropTypes.func,
  /**
   * When true, user can select one or some rows of the table
   */
  checkboxSelection: PropTypes.bool
}



