import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import React from 'react';
import UserForm from './UserForm/UserForm'
import Logo from './logo.png'


const Header = () => {
  return <AppBar position="static">
      <Toolbar>
          <Typography
              variant="h6"
              component="span"
              sx={{flexGrow: 1}}
              color="white"
          >
              <Box
                  size="50%"
                  component='img'
                  src={Logo}
              />

          </Typography>
          <IconButton>
              <UserForm/>
          </IconButton>
      </Toolbar>
  </AppBar>

  }
export default Header;

