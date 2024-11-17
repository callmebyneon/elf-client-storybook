import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { styleVisuallyHidden } from '../../utils/styleUtils';

/**
 * ELF data table header component (column names)
 * @returns Customized TableHead
 */

export function HistoryDataTableHead(props) {
  const {
    headCells, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, checkboxSelection
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCellMapped = headCells.map(option => (option?.width !== undefined) ? `${option.width}` : 'auto');
  const templateColumns = ['48px'].concat(headCellMapped)

  return (
    <TableHead>
      <TableRow
        sx={{
          display: 'grid',
          gridTemplateColumns: templateColumns.join(' '),
        }}
      >
        <TableCell padding="checkbox">
          {checkboxSelection && (
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }} />
          )}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.name}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy.name === headCell.name ? order : false}

          >
            <TableSortLabel
              active={orderBy.name === headCell.name}
              direction={orderBy.name === headCell.name ? order : 'asc'}
              onClick={createSortHandler({ name: headCell.name, type: headCell.type })}
            >
              {headCell.label}
              {orderBy.name === headCell.name ? (
                <Box component="span" sx={styleVisuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
HistoryDataTableHead.propTypes = {
  /**
   * Array of table head cells
   * Ref: items from historyDataHeadRow in './HistoryDataTable'
   */
  headCells: PropTypes.array.isRequired,
  /**
   * Count of selected rows
   */
  numSelected: PropTypes.number.isRequired,
  /**
   * Order type
   */
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  /**
   * Based on what the table be sorted by
   */
  orderBy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['number', 'date', 'string']).isRequired,
  }).isRequired,
  /**
   * Length of rows
   */
  rowCount: PropTypes.number.isRequired,
  /**
   * Callback to be fire when order change
   */
  onRequestSort: PropTypes.func.isRequired,
  /**
   * Callback to be fire when select all rows
   */
  onSelectAllClick: PropTypes.func.isRequired,
  /**
   * When true, user can select one or some rows of the table
   */
  checkboxSelection: PropTypes.bool.isRequired,
};
