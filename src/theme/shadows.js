import { alpha } from '@mui/material/styles'

export default function themeShadows(theme) {
  // const HEX = "#A8ACC4"  // === flatten dimmed color on the #fff
  const HEX = "#515988"     // === alpha(background.dimmed, 1)
  return [
    "none", /* 00 */ 
    `0px 0px 1px ${alpha(HEX, 0.02)}, 0px 0px 4px ${alpha(HEX, 0.2)}`,     /* 01 */ 
    `0px 1px 2px ${alpha(HEX, 0.02)}, 0px 1px 6px ${alpha(HEX, 0.2)}`,     /* 02 */ 
    `0px 1px 2px ${alpha(HEX, 0.02)}, 0px 1px 8px ${alpha(HEX, 0.22)}`,    /* 03 */ 
    `0px 1px 4px ${alpha(HEX, 0.02)}, 0px 1px 10px ${alpha(HEX, 0.22)}`,   /* 04 */ 
    `0px 1px 4px ${alpha(HEX, 0.02)}, 0px 1px 12px ${alpha(HEX, 0.24)}`,   /* 05 */ 
    `0px 2px 4px ${alpha(HEX, 0.02)}, 0px 2px 12px ${alpha(HEX, 0.24)}`,   /* 06 */ 
    `0px 2px 4px ${alpha(HEX, 0.02)}, 0px 2px 14px ${alpha(HEX, 0.26)}`,   /* 07 */ 
    `0px 2px 8px ${alpha(HEX, 0.02)}, 0px 2px 16px ${alpha(HEX, 0.26)}`,   /* 08 */ 
    `0px 3px 8px ${alpha(HEX, 0.03)}, 0px 3px 16px ${alpha(HEX, 0.28)}`,   /* 09 */ 
    `0px 3px 8px ${alpha(HEX, 0.03)}, 0px 3px 18px ${alpha(HEX, 0.28)}`,   /* 10 */ 
    `0px 3px 8px ${alpha(HEX, 0.03)}, 0px 3px 20px ${alpha(HEX, 0.30)}`,   /* 11 */ 
    `0px 4px 8px ${alpha(HEX, 0.03)}, 0px 4px 20px ${alpha(HEX, 0.32)}`,   /* 12 */ 
    `0px 4px 12px ${alpha(HEX, 0.03)}, 0px 4px 22px ${alpha(HEX, 0.34)}`,   /* 13 */ 
    `0px 4px 12px ${alpha(HEX, 0.04)}, 0px 4px 24px ${alpha(HEX, 0.36)}`,   /* 14 */ 
    `0px 4px 12px ${alpha(HEX, 0.04)}, 0px 4px 25px ${alpha(HEX, 0.42)}`,   /* 15 */ 
    `0px 4px 14px ${alpha(HEX, 0.04)}, 0px 4px 26px ${alpha(HEX, 0.44)}`,   /* 16 */ 
    `0px 4px 14px ${alpha(HEX, 0.05)}, 0px 4px 27px ${alpha(HEX, 0.46)}`,   /* 17 */ 
    `0px 4px 14px ${alpha(HEX, 0.05)}, 0px 4px 28px ${alpha(HEX, 0.48)}`,   /* 18 */ 
    `0px 4px 16px ${alpha(HEX, 0.05)}, 0px 4px 29px ${alpha(HEX, 0.48)}`,   /* 19 */ 
    `0px 4px 16px ${alpha(HEX, 0.05)}, 0px 4px 30px ${alpha(HEX, 0.52)}`,   /* 20 */ 
    `0px 4px 16px ${alpha(HEX, 0.05)}, 0px 4px 32px ${alpha(HEX, 0.52)}`,   /* 21 */ 
    `0px 4px 18px ${alpha(HEX, 0.06)}, 0px 4px 32px ${alpha(HEX, 0.52)}`,   /* 22 */ 
    `0px 4px 18px ${alpha(HEX, 0.06)}, 0px 4px 34px ${alpha(HEX, 0.56)}`,   /* 23 */ 
    `0px 4px 20px ${alpha(HEX, 0.06)}, 0px 4px 36px ${alpha(HEX, 0.56)}`,   /* 24 */ 
    `0px 4px 20px ${alpha(HEX, 0.06)}, 0px 4px 36px ${alpha(HEX, 0.56)}`,   /* 25 */ 
  ]
}