import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, InputBase, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Icon from '../../../assets/icons';
import { styleVisuallyHidden, styleAbsolutePosition } from '../../../utils/styleUtils';

export const FilePicker = forwardRef((props, ref) => {
  const { visuallyHidden, allowMultiple, minH, accept, onInput, ...others } = props;
  const theme = useTheme();
  const multiple = allowMultiple;
  const minHeight = minH; ///(px|r?em|v(h|w)|%)/g.test(minH) ? minH : null;
  return (
    <Box
      className={visuallyHidden ? "hidden file-picker-wrapper" : "file-picker-wrapper"}
      sx={fileInputStyle(minHeight, theme)}
      ref={ref}
    >
      <InputBase 
        type="file"
        multiple={multiple}
        sx={{
          ...styleAbsolutePosition,
          width: "100%",
          height: "100%",
          "& input[type=file]": {
            padding: 0,
            display: "block",
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          },
        }}
        inputProps={{ accept: accept || null, multiple, "aria-label": "드래그 하거나 클릭하여 파일 업로드" }}
        onInput={onInput}
        // ...register([name]), ...
        {...others}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2.4rem",
          height: "2rem",
        }}
      >
        <Icon.Plus color={theme.palette.grey[500]} />
      </Box>
      <Typography variant="body2">
        드래그 하거나 클릭하여 파일 업로드
      </Typography>
    </Box>
  )
});

FilePicker.propTypes = {
  ...InputBase.propTypes,
  /**
   * When true, hidden file picker input element
   */
  visuallyHidden: PropTypes.bool,
  /**
   * When true, make multiple file input
   */
  allowMultiple: PropTypes.bool,
  /**
   * Set minimum height by css height prop's value types
   * @type {string} match with /(px|r?em|v(h|w)|%)/g
   */
  minH: function (props, propName, componentName) {
    if (typeof props[propName] === 'string' && !/(px|r?em|v(h|w)|%)/g.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to \`${componentName}\`. Validation failed.`)
    }
  },
  /**
   * Describe a type of file that may be selected by the user
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
   */
  accept: PropTypes.string,
  /**
   * Callback to fire when files are added.
   * check: handleInput returned from useFile hook
   * @see https://mui.com/material-ui/api/input-base/#props
   * @type {(event: React.FormEvent<HTMLDivElement>) => void}
   */
  onInput: PropTypes.func
};

FilePicker.defaultProps = {
  visuallyHidden: false,
  allowMultiple: false,
  minH: '5rem',
  onInput: (event) => event.preventDefault(),
}


export const FileProgressbar = ({ file, done, ...props }) => {
  return (
    <Box>
      <Box
        sx={{
          mb: 1,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component='p'
          variant='subtitle1'
        >{file.name}</Typography>
      </Box>
      <Box>
        <LinearProgress {...props} />
      </Box>
    </Box>
  )
}

function fileInputStyle(minHeight, theme) {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: minHeight,
    padding: 1,
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.grey[100],
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '4px',
    '&:hover, &:focus-visible': {
      background: theme.palette.grey[300]
    },
    '&.hidden': styleVisuallyHidden,
  };
}
