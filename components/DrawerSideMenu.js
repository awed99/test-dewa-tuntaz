import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'

import {
  Toolbar, IconButton, Divider, List, Badge, Box, Container, Grid,
  CssBaseline, Typography, AppBar as MuiAppBar, Drawer as MuiDrawer,

} from '@mui/material'

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {
  mainListItems,
  secondaryListItems,
  thirdListItems
} from './listItems'
import styles from '../styles/Home.module.css'

const mdTheme = createTheme()

const DrawerSideMenu = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const drawerWidth = 240

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${theme.spacing(7)} - 15px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  )

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {/* <AppBar position="absolute" open={open}> */}
            {/* <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            > */}
              {/* <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton> */}
              {/* <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Overview
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
            {/* </Toolbar> */}
          {/* </AppBar> */}

          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
                style={{fontSize: '1.6vw'}}
              >
                <img src="/img/logo-login.png" className={ open ? styles.logoIcon : styles.logoIcon2 } onClick={() => !open && toggleDrawer()} />Iwosan&#8482;
              </Typography>
              
              <IconButton onClick={toggleDrawer}>
                {open && <ChevronLeftIcon />}
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems(router)}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
              <Divider sx={{ my: 1 }} />
              {thirdListItems}
            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default DrawerSideMenu