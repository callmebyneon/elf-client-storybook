import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import Icon from '../../assets/icons';
import { useAuth } from '../../hooks/useAuth';

export default function LogoutButton() {
  const navigate = useNavigate();
  let auth = useAuth();
  
  const handleLogout = async (event) => {
    event.preventDefault();

    if (!auth.user.type) {
      navigate("/signin", { replace: true })
      return;
    }

    auth.signout(() => {
      navigate("/signin", { replace: true })
    });
  };


  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{ fontSize: '12.25px' }}
      startIcon={<Icon.Logout />}
      onClick={(event) => handleLogout(event)}
    >
      {auth.user.type ? 'Log out' : 'Go to Login'}
    </Button>
  )
};