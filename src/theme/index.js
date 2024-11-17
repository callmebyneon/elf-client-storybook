import { createTheme, alpha } from '@mui/material/styles'

import themePalette from './palette'
import themeTypography from './typography'
import themeShadows from './shadows'
import componentStyleOverrides from './compStyleOverride'

import colors from './theme-vars.module.scss'

import { HEADER_HEIGHT } from '../components/Layout/pixelConstants'

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

const themeToken = {
  colors,
  backgroundPaper: colors.backgroundPaper,
  backgroundDefault: colors.backgroundDefault,
  backgroundDim: colors.backgroundDim,
  backgroundDimmed: colors.backgroundDimmed,
  textTitle: alpha(colors.black, 0.87),
  textPrimary: alpha(colors.black, 0.72),
  textSecondary: alpha(colors.black, 0.6),
  textDisabled: alpha(colors.black, 0.38),
  divider: alpha(colors.black, 0.12),
  active: alpha(colors.black, 0.54),
  hover: alpha(colors.black, colors.hoverOpacity),
  selected: alpha(colors.black, colors.selectedOpacity),
  disabled: alpha(colors.black, 0.26),
  disabledBackground: alpha(colors.black, 0.12),
  focus: alpha(colors.black, colors.focusOpacity)
}

const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  direction: 'ltr',
  palette: themePalette(themeToken),
  mixins: {
    toolbar: {
      minHeight: `${HEADER_HEIGHT}px`,
      padding: '16px',
      '@media (min-width: 600px)': {
          minHeight: `${HEADER_HEIGHT}px`
      }
    }
  },
  shadows: themeShadows(themeToken),
  typography: themeTypography(themeToken),
  zIndex: {
    header: 1150
  }
}

const theme = createTheme(themeOptions)
theme.components = componentStyleOverrides(themeToken)

export default theme;

