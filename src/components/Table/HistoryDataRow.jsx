import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import styled from '@emotion/styled';
import { genGridTemplateColumns } from './tableUtils';

export const StyledTableRow = styled(({
  gridTemplateColumns, labelId, isChecked, onClick, fixed = false, ...props
}) => (
  <TableRow
    hover
    onClick={onClick}
    tabIndex={-1}
    role="checkbox"
    aria-checked={isChecked}
    selected={isChecked}
    sx={{
      display: 'grid',
      gridTemplateColumns: gridTemplateColumns,
      '&:last-of-type': {
        borderBottom: '0px solid',
      },
      ...(fixed ? {
        position: 'sticky',
        top: '62px',
        zIndex: '1',
        backgroundColor: (theme) => theme.palette.primary.light,
        // marginBottom: '60px',
      } : {})
    }}
    {...props}
  />
))``

export function HistoryDataRow(props) {
  const {
    index = -1,
    tableId,
    row,
    headCells,
    labelId,
    onSelect = () => { },
    isChecked = false,
    checkboxSelection,
    ...other
  } = props;
  const gridTemplateColumns = genGridTemplateColumns(headCells);
  return (
    <StyledTableRow
      isChecked={isChecked}
      gridTemplateColumns={gridTemplateColumns}
      onClick={(event) => onSelect(event, row)}
      {...other}
    >
      <TableCell padding="checkbox">
        {checkboxSelection && (
          <Checkbox
            color="primary"
            checked={isChecked}
            inputProps={{
              'aria-label': labelId,
            }} />
        )}
      </TableCell>
      {headCells.map(genTableCellsMapper(labelId, row, tableId, index))}
    </StyledTableRow>
  )
}

export function genTableRowsMapper(isSelected, tableId, checkboxSelection, headCells, onSelect, options) {
  return (row, index) => {
    const isChecked = isSelected(row.id);
    const labelId = `table-${tableId}-checkbox-${index}`;
    const props = {
      index,
      tableId,
      row,
      headCells,
      labelId,
      onSelect,
      isChecked,
      checkboxSelection,
      ...options
    };
    return (
      <HistoryDataRow key={index} {...props} />
    );
  };
}

export function genTableCellsMapper(labelId, row, tableId, index) {
  return (cell, _index) => {
    const value = row[cell.name];
    const titleAttr = cell?.makeTitleAttr ? cell.makeTitleAttr(row[cell.name]) : null;
    const formattedValue = cell?.valueFormatter ? cell.valueFormatter(row[cell.name]) : value;
    return _index === 0 ? (
      <TableCell key={labelId} id={labelId} scope="row" title={row[cell.name]}>{row[cell.name]}</TableCell>
    ) : (
      <TableCell key={`${tableId}-${index}-${_index}`} title={titleAttr}>
        {formattedValue}
      </TableCell>
    );
  };
}
