import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Divider,
  Drawer,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { navItems } from '../../routes/navItems';
import { NAV_WIDTH, HEADER_HEIGHT } from './pixelConstants';
import { NavLinkAlt } from './NavLinkAlt';
import LogoutButton from './LogoutButton';

const MenuItemWrapper = ({ disabled, children, ...linkProps }) => {
  // return menu item's wrapper according to disabled prop
  if (disabled) {
    return <div style={{cursor: 'not-allowed'}}>{children}</div>;
  }
  return <NavLinkAlt {...linkProps}>{children}</NavLinkAlt>
}

export default function Nav({ menus, variant, ...other }) {
  const theme = useTheme();

  const handleNavItemClicked = (event) => {
    if (variant !== "permanent") {
      event.preventDefault();
      const { onClose } = other;
      onClose();
    }
  };

  return (
    <Box component="nav">
      {/* navigator drawer */}
      <Drawer 
        PaperProps={NavAreaProps(theme)}
        variant={variant}
        {...other}
      >
        <Box component="div" className="nav-items__list">
          {menus.map((menu, index) => (
            <List
              key={menu.id}
              component="div"
              sx={{
                '& .active-menu-item .MuiListItemButton-root': {
                  background: theme.palette.primary?.tint,
                  color: theme.palette.primary.dark,
                  borderRight: `4px solid ${theme.palette.primary.main}`,
                  'svg': {
                    stroke: theme.palette.primary.main
                  }
                }
              }}
              subheader={
                <ListSubheader
                  component="div"
                  disableSticky
                  sx={{ fontSize: theme.typography.body2.fontSize }}
                >
                  {menu.title}
                </ListSubheader>
              }
            >
              {/* menu items */}
              {menu.items.map(({ id, path, title, icon, disabled, ...other }) => (
                <div key={id} onClick={handleNavItemClicked}>
                  <MenuItemWrapper
                    disabled={disabled}
                    to={path}
                    className={({ isActive }) => isActive ? "active-menu-item" : "menu-item"}
                  >
                    <ListItemButton
                      id={id}
                      disabled={disabled}
                      sx={{
                        my: 1,
                        borderRadius: 1,
                      }}
                    >
                      {icon && <ListItemIcon sc={{ minWidth: '40px' }}>{icon}</ListItemIcon>}
                      <ListItemText 
                        primary={title}
                        primaryTypographyProps={{ variant: 'body1' }}
                        secondary={other?.description}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItemButton>
                  </MenuItemWrapper>
                </div>
              ))}
              {(index !== menus.length - 1) && <Divider variant="middle" light sx={{ mt: 2, mb: 0 }} />}
            </List>
          ))}
        </Box>

        {/* logout button */}
        <Box
          component="div"
          className="nav-items__bottom"
          sx={{ display: 'flex', mb: 2 }}
        >
          <LogoutButton />
        </Box>
      </Drawer>
    </Box>
  )
};

Nav.propTypes = {
  /* 
   * nav item array to link route
   */
  menus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool
    }))
  })).isRequired
};

Nav.defaultProps = {
  menus: navItems
};

function NavAreaProps(theme) {
  return {
    className: 'nav-wrapper__paper',
    sx: {
      p: 2,
      width: `${NAV_WIDTH}px`,
      maxHeight: {
        md: `calc(100vh - ${HEADER_HEIGHT}px)`,
        xs: '100%'
      },
      borderRight: `1px solid ${theme.palette.primary.light}`,
      top: {
        md: `${HEADER_HEIGHT}px`
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'hidden',
      overflowY: 'overlay',
      '.nav-items__list': {
        width: '100%'
      }
    },
    elevation: 0,
    square: true
  };
}
