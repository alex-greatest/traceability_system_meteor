import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Stack, Toolbar, Tooltip } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DrawerCustom, { DrawerHeader } from 'Frontend/components/layout/DrawerCustom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'Frontend/components/auth/auth';
import { useSignal } from '@vaadin/hilla-react-signals';
import PeopleIcon from '@mui/icons-material/People';
import { Link, LinkProps, Outlet } from 'react-router-dom';

export default function Layout() {
  const open = useSignal(false);
  const { state, logout } = useAuth();

  const handleDrawerOpen = () => {
    open.value = true;
  };

  const handleDrawerClose = () => {
    open.value = false;
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: '100%',
          boxShadow: 'none',
          left: 'auto',
          top: '0',
          zIndex: '2000',
          backgroundColor: 'white',
          borderWidth: '0',
          borderBottomWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar sx={{width: '100%', height: '100%'}}>
          <Box sx={{display: 'flex', width: '100%', height: '100%', alignItems: 'center'}}>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
                sx={[
                  {
                    marginRight: 4,
                    color: "rgba(0, 0, 0, 0.87)"
                  },
                  open.value && { display: 'none' },
                ]}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerClose}
                edge="start"
                sx={[
                  {
                    marginRight: 4,
                    color: "rgba(0, 0, 0, 0.87)"
                  },
                  !open.value && { display: 'none' },
                ]}
              >
                <MenuOpenIcon />
              </IconButton>
              <img src="images/meteor.png" alt={"meteor"}/>
              <Box sx={{marginLeft: 'auto', color: "rgba(0, 0, 0, 0.87)", height: '100%', display: 'flex', gap:'0.8em', alignItems: 'center'}}>
                <Box sx={{marginTop: '2px'}}>
                  {state.user?.name}
                </Box>
                <Tooltip title="Выход">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={logout}
                    edge="start"
                    size="large"
                    sx={[
                      {
                        color: "rgba(0, 0, 0, 0.87)"
                      },
                    ]}
                  >
                    <LogoutIcon fontSize={"large"} />
                  </IconButton>
                </Tooltip>
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerCustom variant="permanent" open={open.value}>
        <Toolbar />
        <Divider />
        <List>
          <Tooltip title={"Пользователи"}>
            <ListItemButton
              component={Link as React.ComponentType<LinkProps>} to="/users"
              key="usersListItemLink"
              sx={{
                minHeight: 48,
                justifyContent: open.value ? 'initial' : 'center',
                px: 2.5}}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open.value ? 1 : 'auto',
                  justifyContent: 'center',
                }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Пользователи" sx={{ opacity: open.value ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </List>
      </DrawerCustom>
      <Stack sx={{flex: '1', minWidth: '0'}}>
        <Box sx={{minHeight: '64px'}} />
        <Box component="main" sx={{overflow: 'auto', flex: '1', display: 'flex', flexDirection: 'column'}}>
          <Stack sx={{
            paddingLeft: '24px',
            paddingRight: '24px',
            width: '100%',
            boxSizing: 'border-box',
            flex: '1',
            marginLeft: 'auto',
            marginRight: 'auto'}}>
            <Stack sx={{flex: '1', marginTop: '16px', marginBottom: '16px'}}>
              <Outlet />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

