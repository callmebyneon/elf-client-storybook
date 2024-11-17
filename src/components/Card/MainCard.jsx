import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme, alpha } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

const MainCard = forwardRef(({
  children,
  title,
  subHeader,
  headerAction,
  dividerHide,
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
        ...sx
      }}
      {...others}
    >
      {/* card header and action */}
      {title && (
        <CardHeader 
          sx={headerSX}
          title={<Typography variant="h6" className="MuiCardHeader-title">{title}</Typography>}
          subheader={subHeader ? <Typography variant="subtitle2" className="MuiCardHeader-subheader">{subHeader}</Typography> : null}
          action={headerAction}
        />
      )}

      {/* divider between content & header */}
      {(title && !dividerHide) && <Divider className="MainCard-HeaderDivider" sx={{ borderColor: alpha(theme.palette.divider, 0.08), my: 0.6 }} />}

      {/*  card content */}
      {hasContent
        ? (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )
        : children}
    </Card>
  )
});

MainCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subHeader: PropTypes.string,
  headerAction: PropTypes.node,
  dividerHide: PropTypes.bool,
  sx: PropTypes.object,
  hasContent: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
};

MainCard.defaultProps = {
  dividerHide: false,
  sx: {},
  hasContent: true,
  contentClass: '',
  contentSX: {}
};

export default MainCard;