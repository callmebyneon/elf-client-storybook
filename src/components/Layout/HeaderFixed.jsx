import React from 'react';
import PropTypes from 'prop-types';

import { Box, IconButton, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { HEADER_HEIGHT } from './pixelConstants';
import { NavLinkAlt } from './NavLinkAlt';
import Icon from '../../assets/icons';
import Logo from './Logo';
import LogoutButton from './LogoutButton.jsx';

export default function Header({ onDrawerToggle }) {
  const theme = useTheme();
  return (
    <Paper
      component="header"
      elevation={0}
      square={true}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        height: `${HEADER_HEIGHT}px`,
        borderBottom: `1px solid ${theme.palette.primary.light}`,
        xIndex: theme.zIndex.header,
        '& .header-items__logo': {
          mr: 'auto'
        }
      }}
    >
      {/* mobile navigator toggle button */}
      <Box component="div">
        <IconButton
          aria-label="open drawer"
          onClick={onDrawerToggle}
          sx={{
            display: {
              md: 'none',
              sx: 'block'
            },
            mr: 1,
            fontSize: 'inherit'
          }}
        >
          <Icon.Menu />
        </IconButton>
      </Box>

      {/* header logo (h1) */}
      <Box component="div"className="header-items__logo">
        <NavLinkAlt to="/">
          <Typography component="h1" pl={1}>
            <span hidden>ELF</span>
            <Logo type="dark" size={20} />
          </Typography>
        </NavLinkAlt>
      </Box>

      {/* logout button */}
      {useMediaQuery(theme.breakpoints.up('md')) && (
        <Box component="div" className="header-items__buttons" sx={{ mr: 1 }}>
          <LogoutButton />
        </Box>
      )}
    </Paper>
  )
};

Header.propTypes = {
  /* 
   * Action to toggle under the 'medium' size of screen
   */
  onDrawerToggle: PropTypes.func.isRequired
};

Header.defaultProps = {
  onDrawerToggle: (event) => event.preventDefault()
};