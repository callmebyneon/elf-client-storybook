/**
 * Color intention that you want to used in your theme
 * MUI's Default Theme and theme object: https://mui.com/material-ui/customization/default-theme/
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  //console.log(theme);
  return {
    mode: "light",
    common: {
      black: theme.colors?.black,
      white: theme.colors?.white
    },
    primary: {
      tint: theme.colors?.primaryTint,
      lighter: theme.colors?.primaryLighter,
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      darker: theme.colors?.primaryDarker
    },
    secondary: {
      tint: theme.colors?.secondaryTint,
      lighter: theme.colors?.secondaryLighter,
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      darker: theme.colors?.secondaryDarker
    },
    info: {
      tint: theme.colors?.infoTint,
      lighter: theme.colors?.infoLighter,
      light: theme.colors?.infoLight,
      main: theme.colors?.infoMain,
      dark: theme.colors?.infoDark,
      darker: theme.colors?.infoDarker,
      contrastText: theme.colors?.white
    },
    success: {
      tint: theme.colors?.successTint,
      lighter: theme.colors?.successLighter,
      light: theme.colors?.successLight,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
      darker: theme.colors?.successDarker,
      contrastText: theme.colors?.white
    },
    warning: {
      tint: theme.colors?.warningTint,
      lighter: theme.colors?.warningLighter,
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
      darker: theme.colors?.warningDarker,
      contrastText: theme.colors?.white
    },
    error: {
      tint: theme.colors.errorTint,
      lighter: theme.colors.errorLighter,
      light: theme.colors.errorLight,
      main: theme.colors.errorMain,
      dark: theme.colors.errorDark,
      darker: theme.colors.errorDarker
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      200: theme.colors?.grey200,
      300: theme.colors?.grey300,
      400: theme.colors?.grey400,
      500: theme.colors?.grey500,
      600: theme.colors?.grey600,
      700: theme.colors?.grey700,
      800: theme.colors?.grey800,
      900: theme.colors?.grey900
    },
    text: {
      title: theme.textTitle,
      primary: theme.textPrimary,
      secondary: theme.textSecondary,
      disabled: theme.textDisabled
    },
    divider: theme.divider,
    background: {
      paper: theme.backgroundPaper,
      default: theme.backgroundDefault,
      dimmed: theme.backgroundDimmed,
      dim: theme.backgroundDim
    },
    action: {
      active: theme.active,
      activatedOpacity: theme.colors?.activatedOpacity,
      hover: theme.hover,
      hoverOpacity: theme.colors?.hoverOpacity,
      selected: theme.selected,
      selectedOpacity: theme.colors?.selectedOpacity,
      disabled: theme.disabled,
      disabledBackground: theme.disabledBackground,
      disabledOpacity: theme.colors?.disabledOpacity,
      focus: theme.focus,
      focusOpacity: theme.colors?.focusOpacity
    }
  }
}