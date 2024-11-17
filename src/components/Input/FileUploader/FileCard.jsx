import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box, IconButton, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

import { formatBytes } from '../../../utils';
import Icon from '../../../assets/icons';

const FileCard = memo(
  forwardRef((props, ref) => {
    const { id, file: { name, size }, onDelete } = props;
    const theme = useTheme();
    const handleDeleteSelectedFile = (event) => {
      onDelete(event);
    }
    return (
      <Box
        id={id}
        ref={ref}
        className="selected-file__item-card"
        sx={fileCardStyle(theme)}
      >
        <Box className='selected-item__file-icon'>
          <Icon.File />
        </Box>
        <Box className='selected-item__file-info'>
          <Typography
            className='selected-item__file-info-name'
            component='p'
            variant='subtitle1'
          >
            {name}
          </Typography>
          {size > 0 && (
            <Typography
              className='selected-item__file-info-size'
              component='p'
              variant='caption'
            >
              {formatBytes(size, 1)}
            </Typography>
          )}
        </Box>
        {onDelete && (
          <IconButton
            className='selected-item__delete'
            onClick={handleDeleteSelectedFile}
          >
            <Icon.Cross />
          </IconButton>
        )}
      </Box>
    )
  })
);

FileCard.propTypes = {
  /**
   * Key value of each FileCard element
   */
  id: PropTypes.string.isRequired, 
  /**
   * Information to render FileCard element
   */
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number
  }),
  /**
   * Callback to be fired when the delete button is clicked.
   * If not provided, the button will not render.
   */
  onDelete: PropTypes.func
};

FileCard.defaultProps = {
  file: {
    name: 'undefined',
  },
  onDelete: (event) => event.preventDefault()
};

export default FileCard;

function fileCardStyle(theme) {
  return {
    display: 'grid',
    gridTemplateColumns: '2.2rem auto 2.2rem',
    alignItems: 'center',
    p: 2,
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: '4px',
    '&:not(:first-of-type)': {
      mt: 1
    },
    '.selected-item__file-icon': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2.2rem',
      height: '2.2rem',
      background: alpha(theme.palette.grey[100], 0.7)
    },
    '.selected-item__file-info': {
      mx: 2,
      py: 0.5,
      maxWidth: '70%',
      '.selected-item__file-info-name': {
        display: 'block',
        width: '100%',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        overflow: 'hidden',
      },
      '.selected-item__file-info-size': {
        display: 'block',
        width: '100%',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        color: theme.palette.grey[400],
        overflow: 'hidden',
      },
    },
    '.selected-item__delete': {
      ml: "auto",
      borderRadius: 2,
      color: theme.palette.grey[400],
      "&:hover": {
        color: alpha(theme.palette.error.main, 0.7),
      },
    }
  };
}
