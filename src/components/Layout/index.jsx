import React from 'react';
import { Outlet } from 'react-router';
import { useInRouterContext } from 'react-router-dom';

import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';
import { navItems, openItems } from '../../routes/navItems';
import { EmptyPage } from '../Error';
import HeaderFixed from './HeaderFixed';
import NavFixed from './NavFixed';
import MainContent from './MainContent';

import { makeFileDragAndDrop } from './../Input/FileUploader/useFile';
import { NAV_WIDTH, HEADER_HEIGHT, FOOTER_HEIGHT } from './pixelConstants.js';
import { FooterBox } from './FooterBox';

const LayoutWrapper = styled.div(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: `${NAV_WIDTH}px minmax(calc(100vw - ${NAV_WIDTH}px), auto)`,
    gridTemplateRows: `${HEADER_HEIGHT}px minmax(calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}), auto) ${FOOTER_HEIGHT}px`,
    gridTemplateAreas: `
      'header header'
      'nav main'
      'nav footer'`,
    '& > header': {
      gridArea: 'header'
    },
    '& > nav': {
      gridArea: 'nav'
    },
    '& > main': {
      gridArea: 'main'
    },
    '& > footer': {
      gridArea: 'footer'
    },
  }
}));

export function Wrapper({ children }) {
  let { user } = useAuth();
  const menus = user?.type ? navItems.map(group => ({
    ...group,
    items: group.items.filter(item => item.access.includes(user.type))
  })).filter(({ items }) => items.length > 0) : openItems
  
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const mobileBreakpoint = 'md';
  const isMobileUp = useMediaQuery(theme.breakpoints.up(mobileBreakpoint));

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
    // console.log({mobileOpen})
  };

  const MobileNavProp = isMobileUp ? {
    open: true,
  } : {
    open: mobileOpen,
    onClose: handleDrawerToggle,
  };

  const { handleDragOver, handleDrop } = makeFileDragAndDrop();

  return (
    <LayoutWrapper
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <HeaderFixed onDrawerToggle={handleDrawerToggle} breakpoint={mobileBreakpoint} />
      <NavFixed 
        menus={menus}
        variant={isMobileUp ? "permanent" : "temporary"}
        {...MobileNavProp}
      />
      <MainContent>
        {children}
      </MainContent>
      <FooterBox />
    </LayoutWrapper>
  )
}

export default function Layout() {
  const RouterContext = useInRouterContext();
  return (
    <Wrapper>
      {RouterContext ? <Outlet /> : <EmptyPage title="There's no RouterContext" />}
    </Wrapper>
  )
}

