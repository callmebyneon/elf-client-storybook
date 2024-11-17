import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

// import project
import { Logo as LogoGraphic } from '../../assets/logoGraphic';
import { Logo as LogoText } from '../../assets/logoText';

export default function Logo({ type, size }) {
  const calcedSize = {
    logoText: size,
    logoGraphic: size * 1.6
  };
  
  return (
    <Stack direction="row" alignItems="center">
      <LogoGraphic type={type === 'dark' ? 'dark' : 'light'} sx={{ height: calcedSize.logoGraphic, width: calcedSize.logoGraphic, mr: 1 }} />
      <LogoText type={type === 'dark' ? 'dark' : 'light'} sx={{ height: calcedSize.logoText, width: calcedSize.logoText*2.6, verticalAlign: 'top' }} />
    </Stack>
  )
};

Logo.propTypes = {
  type: PropTypes.oneOf([ 'dark', 'light' ]),
  size: PropTypes.number
};

Logo.defaultProps = {
  type: 'dark',
  size: 20
}