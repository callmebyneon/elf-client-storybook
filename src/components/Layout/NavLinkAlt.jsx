import { NavLink, useInRouterContext } from 'react-router-dom';

export const NavLinkAlt = ({ children, ...other }) => {
  const RouterContext = useInRouterContext();
  if (RouterContext) {
    return <NavLink {...other}>{children}</NavLink>
  };
  return <div>{children}</div>
};

