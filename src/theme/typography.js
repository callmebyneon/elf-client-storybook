const parseFloatToFixed = (number) => parseFloat(number.toFixed(2))

/**
 * Typography used in theme
 * MUI's Default Theme and theme object: https://mui.com/material-ui/customization/default-theme/
 * @param {JsonObject} theme Theme customization object
 */

const REM = 14; // SET 1rem
const FF = {
  UI: [
    "SpoqaHanSansNeo",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "'Helvetica Neue'",
    "'Segoe UI'",
    "'Apple SD Gothic Neo'",
    "'Noto Sans KR'",
    "'Malgun Gothic'",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'"
  ].join(','),
  CODE: [
    "monospace"
  ].join(',')
};

export default function themeTypography(theme) {
  return {
    htmlFontSize: REM,
    fontFamily: FF.UI,
    fontSize: REM,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      color: theme.textTitle,
      fontFamily: FF.UI,
      fontWeight: 700,
      fontSize: `${parseFloatToFixed(6 * REM)}px`,
      lineHeight: 1.167,
      letterSpacing: "0em"
    },
    h2: {
      color: theme.textTitle,
      fontFamily: FF.UI,
      fontWeight: 700,
      fontSize: `${parseFloatToFixed(4 * REM)}px`,
      lineHeight: 1.11,
      letterSpacing: "0em"
    },
    h3: {
      color: theme.textTitle,
      fontFamily: FF.UI,
      fontWeight: 500,
      fontSize: `${parseFloatToFixed(3 * REM)}px`,
      lineHeight: 1.2,
      letterSpacing: "0em"
    },
    h4: {
      color: theme.textTitle,
      fontFamily: FF.UI,
      fontWeight: 500,
      fontSize: `${parseFloatToFixed(2 * REM)}px`,
      lineHeight: 1.235,
      letterSpacing: "0em"
    },
    h5: {
      color: theme.textTitle,
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${parseFloatToFixed(1.5 * REM)}px`,
      lineHeight: 1.334,
      letterSpacing: "0em"
    },
    h6: {
      color: theme.textTitle,
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${parseFloatToFixed(1.142857142857143 * REM)}px`, // 16px
      lineHeight: 1.571428571428572,
      letterSpacing: "0em"
    },
    subtitle1: {
      color: theme.textSecondary,
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${REM}px`,
      lineHeight: 1.714285714285714,
      letterSpacing: "0.00938em"
    },
    subtitle2: {
      color: theme.textSecondary,
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${parseFloatToFixed(0.9285714285714286 * REM)}px`, // 13px
      lineHeight: 1.692307692307692,
      letterSpacing: "0.00938em"
    },
    body1: {
      color: theme.textPrimary,
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${1 * REM}px`,
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    body2: {
      color: theme.textSecondary,
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${parseFloatToFixed(0.9285714285714286 * REM)}px`, // 13px
      lineHeight: 1.6,
      letterSpacing: "0.00938em"
    },
    button: {
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${parseFloatToFixed(0.8571428571428571 * REM)}px`,  // 12px
      lineHeight: 1.6,
      letterSpacing: "0.028em",
      textTransform: "capitalize"
    },
    caption: {
      fontFamily: FF.UI,
      fontWeight: 400,
      fontSize: `${parseFloatToFixed(0.8571428571428571 * REM)}px`,  // 12px
      lineHeight: 1.6,
      letterSpacing: "0.028em",
      textTransform: "capitalize"
    }
  }
}