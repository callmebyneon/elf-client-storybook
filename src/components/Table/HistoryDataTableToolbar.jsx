import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/**
 * View table title or selected row(s) count
 * @returns Table Toolbar
 */

export const HistoryDataTableToolbar = ({ title, numSelected }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        bgcolor: (theme) => theme.palette.background.default,
        ...(numSelected > 0 ? {
          color: (theme) => theme.palette.primary.main,
        } : {
          color: (theme) => theme.palette.background.default,
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%', fontWeight: 500 }}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontWeight: 500 }}
          variant="h6"
          id="tableTitle"

        >
          {title}
        </Typography>
      )}
    </Toolbar>
  );
};
HistoryDataTableToolbar.propTypes = {
  /**
   * Title of the table
   */
  title: PropTypes.string.isRequired,
  /**
   * Count of selected rows
   */
  numSelected: PropTypes.number.isRequired,
};
