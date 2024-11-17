import { alpha } from '@mui/material/styles'
import Fade from '@mui/material/Fade';

import Icon from '../assets/icons'

import SpoqaHanSansNeoRegularTtf from './fonts/SpoqaHanSansNeo-Regular.ttf'
import SpoqaHanSansNeoRegularWoff2 from './fonts/SpoqaHanSansNeo-Regular.woff2'
import SpoqaHanSansNeoMediumTtf from './fonts/SpoqaHanSansNeo-Medium.ttf'
import SpoqaHanSansNeoMediumWoff2 from './fonts/SpoqaHanSansNeo-Medium.woff2'
import SpoqaHanSansNeoBoldTtf from './fonts/SpoqaHanSansNeo-Bold.ttf'
import SpoqaHanSansNeoBoldWoff2 from './fonts/SpoqaHanSansNeo-Bold.woff2'

export default function componentStyleOverrides(theme) {
  const fontFace = `
    @font-face {
      font-family: 'SpoqaHanSansNeo';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Spoqa Han Sans Neo'), url(${SpoqaHanSansNeoRegularWoff2}) format('woff2'), url(${SpoqaHanSansNeoRegularTtf});
    }
    @font-face {
      font-family: 'SpoqaHanSansNeo';
      font-style: normal;
      font-display: swap;
      font-weight: 500;
      src: local('Spoqa Han Sans Neo'), url(${SpoqaHanSansNeoMediumWoff2}) format('woff2'), url(${SpoqaHanSansNeoMediumTtf});
    }
    @font-face {
      font-family: 'SpoqaHanSansNeo';
      font-style: normal;
      font-display: swap;
      font-weight: 700;
      src: local('Spoqa Han Sans Neo'), url(${SpoqaHanSansNeoBoldWoff2}) format('woff2'), url(${SpoqaHanSansNeoBoldTtf});
    }
  `

  const userSelectNone = {
    userSelect: 'none'
  };

  return {
    /* css base */
    MuiCssBaseline: {
      styleOverrides: `
      ${fontFace}
      * {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
      }
      body {
        scroll-behavior: smooth;
        -webkit-font-smoothing:  antialiased;
          -moz-osx-font-smoothing: grayscale;
      }
      header, nav, aside, footer, section, article {
        -webkit-user-select: none;
          -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
      }
      a, a:visited, a:active {
        color: inherit;
        text-decoration: none;
      }
      pre, code {
        font-family: 'Consolas', monospace;
      }
      [role='menu'] [disabled] a {
        color: ${theme.backgroundDimmed || "#c1c4d6"}
      }
      ::selection {
        background: ${theme.colors?.primaryMain};
        color: ${theme.backgroundPaper};
      }
      ::placeholder {
        font-weight: 500;
      }
      @keyframes spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
      }
      `
    },
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <Icon.Error stroke="2" />,
          info: <Icon.Info stroke="2" />,
          success: <Icon.Success stroke="2" />,
          warning: <Icon.Warning stroke="2" />
        }
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          paddingLeft: '20px',
          paddingRight: '20px',
          borderRadius: '8px',
          color: theme.colors?.white
        },
        icon: {
          marginRight: '8px'
        },
        action: {
          paddingTop: '2px',
          paddingLeft: '20px',
          'button': {
            color: alpha(theme.colors?.backgroundPaper, 0.64)
          },
          'svg > line': {
            color: alpha(theme.colors?.backgroundPaper, 0.64)
          }
        },
        filledError: {
          background: theme.colors?.errorMain,
        },
        filledWarning: {
          background: theme.colors?.warningMain,
        },
        filledInfo: {
          background: theme.colors?.infoMain,
        }
      }
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginTop: '-4px',
          fontSize: '16px',
          letterSpacing: '0.02em',
          color: 'inherit'
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          '&:not(.MuiBackdrop-invisible)': {
            backgroundColor: theme.backgroundDimmed
          }
        }
      }
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        color: "secondary",
      },
      styleOverrides: {
        label: {
          fontSize: '12px'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        fullWidth: ({ ownerState }) => ({
          margin: ownerState.orientation === "vertical" ? '0 2rem' : '2rem 0'
        }),
        middle: ({ ownerState }) => ({
          margin: ownerState.orientation === "vertical" ? '16px 2rem' : '2rem 16px'
        })
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          justifyContent: 'space-between',
          '&.Mui-selected::after': {
            content: '"✓"',
            display: 'inline-block',
            fontWeight: 700,
            color: theme.colors?.primaryDark
          }
        }
      }
    },
    MuiSnackbar: {
      defaultProps: {
        TransitionComponent: Fade
      },
      styleOverrides: {
        root: {
          '.MuiPaper-root': {
            overflow: 'hidden',
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '4px 8px 6px',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16px'
        }
      }
    },
    /* button */
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          ...(ownerState.variant === 'contained' && {
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color].darker,
              boxShadow: 'none'
            }
          })
        }),
        sizeSmall: {
          padding: '6px 12px',
          fontSize: '11px',
        },
        sizeMedium: {
          padding: '10px 20px',
          fontSize: '12px',
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '13px',
        },
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const ownerStateColor = theme.palette[ownerState.color]?.main || theme.palette.primary.main;
          return {
            padding: '6px',
            borderRadius: '12px',
            border: ownerState?.border ? '1px solid' : 'none',
            borderColor: alpha(ownerStateColor, 0.5),
            '&:hover': {
              borderColor: ownerStateColor
            }
          }
        }
      } 
    },
    /* card */
    MuiCard: {
      styleOverrides: {
        root: {
          '.MainCard-headerDivider': {
            margin: 0
          }
        }
      }
    },
    MuiCardActions: {
			styleOverrides: {
				root: {
					padding: "20px 16px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: "20px",
          margin: "0",
          '&:last-child': {
            padding: "20px"
          }
				},
			},
		},
		MuiCardHeader: {
			defaultProps: {
				titleTypographyProps: {
					variant: "h6"
				},
				subheaderTypographyProps: {
					variant: "subtitle2",
				},
			},
			styleOverrides: {
				root: {
					color: theme.colors?.textDark,
					padding: "20px 24px",
				},
				title: {
					fontWeight: 500,
          color: theme.textTitle
				},
        subheader: {
          color: theme.textSecondary
        }
			},
		},
    /* dialog */
    MuiDialog: {
      styleOverrides: {
        container: {
          '.MuiPaper-root': {
            borderRadius: '8px'
          }
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 700
        }
      }
    },
    /* list (side navigator) */
    MuiList: {
      styleOverrides: {
        root: {
          ...userSelectNone,
          padding: '8px'
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: userSelectNone
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
          '& .MuiTypography-root': {
            lineHeight: '20px'
          }
        },
        secondary: {
          color: theme.backgroundDim
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: '16px',
          paddingBottom: '16px'
        }
      }
    },
    /* inputs */
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          '.MuiSvgIcon-root': {
            width: '24px',
            height: '24px'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const isDisabled = ownerState?.disabled;
          return {
            borderRadius: '8px',
            backgroundColor: alpha(theme.palette.background.dimmed, 0.06),
            '&.Mui-error': {
              '&::after': {
                transform: 'scaleX(0.94) translateX(0)'
              },
              '&.Mui-focused, &:not(.Mui-disabled):hover': {
                borderRadius: '8px',
                outline: isDisabled ? 0 : `4px solid ${theme.palette.error.lighter}`,
              }
            },
            '&.Mui-focused': {
              borderRadius: '8px',
              outline: isDisabled ? 0 : `4px solid ${theme.palette[ownerState.color].lighter}`,
              backgroundColor: alpha(theme.palette.background.dimmed, 0.06),
              '&::after': {
                transform: 'scaleX(0.94) translateX(0)'
              }
            },
            '&.Mui-disabled': {
              '&::before': {
                border: 'none' 
              }
            },
            '&:not(.Mui-disabled):hover': {
              borderRadius: '8px',
              outline: isDisabled ? 0 : `4px solid ${theme.palette[ownerState.color].lighter}`,
              backgroundColor: alpha(theme.palette.background.dimmed, 0.12),
              '&::before': {
                border: 'none'
              }
            }
          }
        },
        input: {
          padding: '18px 18px 16px',
          fontWeight: 500
        },
        sizeSmall: {
          '.MuiFilledInput-input': {
            padding: '14px 14px 12px'
          }
        },
        underline: {
          '&:before': {
            border: 'none'
          }
        } 
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '6px 14px 0px',
          fontSize: '13px',
          lineHeight: 1.4
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        inputSizeSmall: {
          padding: '10px 16px',
        },
      }
    },
    MuiInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const isDisabled = ownerState?.disabled;
          return {
            position: 'relative',
            borderRadius: '8px',
            '&::before': {
              width: '100%',
              height: '100%',
              top: 0,
              border: `1px solid ${isDisabled ? theme.palette.text.disabled : theme.palette[ownerState.color].main}`,
              borderRadius: '8px'
            },
            '&.Mui-focused, &:hover': {
              '&::after': {
                border: 'none'
              },
              '&:not(.Mui-disabled)::before': {
                border: `2px solid ${isDisabled ? theme.palette.text.disabled : theme.palette[ownerState.color].main}`,
                borderRadius: '8px',
                outline: isDisabled ? 0 : `4px solid ${theme.palette[ownerState.color].lighter}`
              },
              // '.MuiInputBase-input': {
              //   borderRadius: '8px',
              //   outline: isDisabled ? 0 : `4px solid ${theme.palette[ownerState.color].lighter}`
              // }
            },
            '&.Mui-error': {
              '&.Mui-focused, &:hover': {
                '&::before': {
                  border: `2px solid ${isDisabled ? theme.palette.text.disabled : theme.palette.error.main}`,
                  outline: isDisabled ? 0 : `4px solid ${theme.palette.error.lighter}`
                },
                // '.MuiInputBase-input': {
                //   borderRadius: '8px',
                //   outline: isDisabled ? 0 : `4px solid ${theme.palette.error.lighter}`
                // }
              },
              '&::after': {
                border: 'none'
              },
              '&::before': {
                border: `1px solid ${isDisabled ? theme.palette.text.disabled : theme.palette.error.main}`
              }
            },
            '&.Mui-disabled': {
              '&::before': {
                borderStyle: 'solid' 
              }
            },
            '&.MuiInputBase-adornedStart': {
              paddingLeft: '14px'
            },
            '&.MuiInputBase-adornedEnd': {
              paddingRight: '14px'
            },
            '.MuiSelect-select ~ svg': {
              fill: isDisabled? theme.palette.text.disabled : theme.palette[ownerState.color].main,
              right: '7px'
            }
          }
        },
        input: {
          padding: '16px 18px',
          fontWeight: 500,
        },
        inputSizeSmall: {
          padding: '10px 16px',
        },
        error: {
          color: theme.colors?.errorMain
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '.MuiIconButton-root': {
            // border: 'none',
            borderRadius: '8px',
            opacity: 0.5,
            '&:hover': {
              opacity: 0.725
            }
          },
          '.MuiTypography-root': {
            fontWeight: 400
          }
        },
        filled: {
          '&:not(.MuiInputAdornment-hiddenLabel)': {
            marginBottom: '16px'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&:not(.MuiInputLabel-outlined):not(.MuiInputLabel-filled)': {
            padding: '0 5px',
            transform: 'translate(9px, 16px) scale(1)',
            background: theme.backgroundPaper,
            '&.MuiInputLabel-shrink': {
              transform: 'translate(11px, -9px) scale(0.75)',
              zIndex: 1
            },
            '&+.MuiInput-root, &+.MuiInputBase-root': {
              marginTop: 0
            }
          }
        },
        outlined: {
          background: theme.backgroundPaper,
          padding: '0 5px',
          transform: 'translate(9px, 16px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(9px, -9px) scale(0.75)'
          }
        },
        filled: {
          '&.MuiInputLabel-shrink': {
            transform: 'translate(12px, 0px) scale(0.75)'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const isDisabled = ownerState?.disabled;
          const ownerStateColor = (ownerState && ownerState?.color !== 'default') ? ownerState.color : 'primary';
          return {
            '&:not(.Mui-error).Mui-focused, &:not(.Mui-error):not(.Mui-disabled):hover': {
              borderRadius: '8px',
              outline: isDisabled ? 0 : `4px solid ${theme.palette[ownerStateColor].lighter}`,
            }
          }
        },
        error: {
          '&.Mui-focused, &:not(.Mui-disabled):hover': {
            borderRadius: '8px',
            outline: `4px solid ${theme.colors?.errorLighter}`,
          }
        },
        input: {
          padding: '16px 18px',
          fontWeight: 500
        },
        sizeSmall: {
          '.MuiOutlinedInput-input': {
            padding: '10px 16px'
          }
        },
        notchedOutline: {
          borderRadius: '8px',
          'legend > span': {
            padding: 0
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& > span:first-of-type > svg.MuiSvgIcon-root': {
            width: '24px',
            height: '24px',
            '&:last-of-type': {
              fill: 'transparent'
            }
          },
          '&.Mui-checked': {
            '& > span:first-of-type > svg.MuiSvgIcon-root': {
              '&:last-of-type': {
                borderRadius: '50%',
                backgroundColor: 'currentColor',
                fill: theme.backgroundPaper,
                transform: 'scale(0.834)'
              }
            }
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: '54px',
          height: '36px',
          padding: '6px'
        },
        switchBase: ({ ownerState, theme }) => ({
          padding: '11px',
          '&.Mui-checked': {
            padding: '9px',
            transform: 'translateX(18px)',
            '& + .MuiSwitch-track': {
              opacity: 1,
              borderColor: theme.palette[ownerState.color].main,
              backgroundColor: theme.palette[ownerState.color].main
            },
            '.MuiSwitch-thumb': {
              width: '18px',
              height: '18px',
              backgroundColor: theme.palette.background.paper,
            },
            '&.Mui-disabled': {
              opacity: 0.38,
              '&.Mui-checked': {
                opacity: 1
              },
              '& + .MuiSwitch-track': {
                opacity: 0.12
              }
            }
          }
        }),
        thumb: ({ ownerState, theme }) => ({
          width: '14px',
          height: '14px',
          backgroundColor: theme.palette.background.dimmed,
          boxShadow: theme.shadows[0]
        }),
        track: ({ ownerState, theme }) => ({
          borderRadius: '16px',
          opacity: 1,
          border: `1px solid ${theme.palette.background.dimmed}`,
          backgroundColor: alpha(theme.palette.background.dimmed, 0.08)
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(((!ownerState.disabled && ownerState?.color) || ownerState.error) && {
            '& .MuiInputLabel-root': {
              color: theme.palette[ownerState.color].main,
              '&.Mui-error': {
                color: theme.palette.error.main
              }
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-error': {
                'input': {
                  color: theme.palette.error.main
                },
                '.MuiFormHelperText-root': {
                  color: theme.palette.error.main
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '2px solid',
                  borderColor: theme.palette.error.main
                }
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: '2px solid',
                borderColor: theme.palette[ownerState.color].main
              }
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette[ownerState.color].main
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: '2px solid',
              borderColor: theme.palette[ownerState.color].main
            },
            '.MuiFormHelperText-root': {
              color: theme.palette[ownerState.color].main
            },
            '.MuiSelect-icon': {
              fill: theme.palette[ownerState.color].main
            }
          })
        }),
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '2px'
        }
      }
    },
    /* data table */
    MuiTable: {
      defaultProps: {
        component: 'div'
      },
      styleOverrides:{
        stickyHeader: {
          '.MuiTableHead-root': {
            position: 'sticky',
            top: 0,
            zIndex: 1,
            '.MuiTableRow-root': {
              backgroundColor: theme.backgroundDefault
            }
          }
        }
      }
    },
    MuiTableBody: {
      defaultProps: {
        component: 'div'
      }
    },
    MuiTableHead: {
      defaultProps: {
        component: 'div'
      }
    },
    MuiTableRow: {
      defaultProps: {
        component: 'div'
      },
      styleOverrides: {
        root: {
          alignItems: 'center',
          borderBottom: `1px solid ${theme.colors?.grey300}`,
        }
      }
    },
    MuiTableCell: {
      defaultProps: {
        component: 'div'
      },
      styleOverrides: {
        root: {
          borderBottom: '0 solid',
          backgroundColor: 'transparent',
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }
      }
    },
    /* @mui/x-data-grid */
    MuiDataGrid: {
      styleOverrides: {
        cell: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
        "columnHeader--sortable": {
          paddingLeft: '16px',
          paddingRight: '16px',  
        }
      }
    }
  }
}