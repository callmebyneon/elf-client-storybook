import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';

const SubCard = forwardRef(({
  children,
  title,
  headerAction,
  sx,
  hasContent,
  contentClass,
  contentSX,
  ...others
}, ref) => {
  const theme = useTheme();

  return (
    <Card
      ref={ref}
      variant="outlined"
      elevation={0}
      sx={{
        borderColor: theme.palette.divider,
        '&:not(:first-of-type)': {
          mt: 2
        },
        ...sx
      }}
      {...others}
    >
      {/* card header and action */}
      {title && <CardHeader sx={{ px: 2, py: 1.5 }} title={title} action={headerAction} />}

      {/* divider between content & header */}
      {title && <Divider className="MainCard-headerDivider" sx={{ opacity: 1 }}	/>}

      {/*  card content */}
      {hasContent
        ? (
          <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass}>
            {children}
          </CardContent>
        )
        : children}
    </Card>
  )
});

SubCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  headerAction: PropTypes.node,
  sx: PropTypes.object,
  hasContent: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
};

SubCard.defaultProps = {
  sx: {},
  hasContent: false,
  contentClass: '',
  contentSX: {}
};

export default SubCard;