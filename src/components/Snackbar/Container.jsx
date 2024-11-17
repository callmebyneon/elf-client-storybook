import { Toaster } from 'react-hot-toast';
import { useTheme } from '@mui/material/styles';

import Icon from '../../assets/icons';

const SnackbarContainer = () => {
  const theme = useTheme();
  const TIMEOUT = theme.transitions.duration.complex * 10; //3750 (ms)

  return (
    <Toaster
      position='top-center'
      gutter={8}
      toastOptions={{
        duration: TIMEOUT,
        style: {
          background: theme.palette.background.dim,
          color: theme.palette.common.white,
          borderRadius: '8px',
          overflow: 'hidden',
        },
        success: {
          icon: <Icon.Success stroke="2" />,
          style: {
            background: theme.palette.success.main,
          }
        },
        error: {
          icon: <Icon.Error stroke="2" />,
          style: {
            background: theme.palette.error.main,
          }
        }
      }}
    />
  )
}

export default SnackbarContainer;