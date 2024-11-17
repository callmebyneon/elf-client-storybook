import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import { NAV_WIDTH, HEADER_HEIGHT, FOOTER_HEIGHT } from './pixelConstants.js';

export default function Main({ children }) {
  const MAIN_WIDTH = { md: `calc(100vw - ${NAV_WIDTH}px)`, xs: '100vw' };
  const MAIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`;

  return (
    <Box
      component="main"
      backgroundColor
      sx={{
        px: '40px',
        pt: '20px',
        pb: '60px',
        width: MAIN_WIDTH,
        height: MAIN_HEIGHT,
        position: 'relative',
        backgroundColor: 'background.default',
        overflow: 'auto'
      }}
    >
      {children}
    </Box>
  )
};

Main.propTypes = {
  /* 
   * children node
   */
  children: PropTypes.node.isRequired
};