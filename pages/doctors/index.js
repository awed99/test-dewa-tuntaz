import * as React from 'react'

import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { map } from 'lodash'

import {
  List, ListItem, ListItemButton, ListItemText,
  Box, Badge, Paper, Link, Avatar, Button, Popover,
  Typography, Container, Grid, IconButton,
  FormControl, InputLabel, Select, MenuItem,
  TextField, InputAdornment, ButtonGroup, Pagination,
} from '@mui/material'
import { MoreHoriz, Search as SearchIcon } from '@mui/icons-material'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

import Header from '../../components/Header'
import DrawerSideMenu from '../../components/DrawerSideMenu'

import useCustom from './hooks'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Dewa's Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const mdTheme = createTheme()

const DashboardContent = () => {
  const { state, handler } = useCustom()
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <DrawerSideMenu />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container>
            <Header />            
            <Box>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 10,
                  }}
                >
                  <Box>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Show</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state?.show}
                        label="Age"
                        onChange={handler?.handleChangeShow}
                      >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                      </Select>
                    </FormControl>
                    
                    &emsp;&emsp;
                    
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Status</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={0}
                        label="Age"
                      >
                        <MenuItem value={0}>Online</MenuItem>
                      </Select>
                    </FormControl>
                    
                    &emsp;&emsp;
                  
                    <FormControl sx={{ m: 1 }}>
                      <TextField
                      style={{marginTop: '-15px'}}
                      InputProps={{
                          startAdornment: (
                          <InputAdornment>
                              <IconButton>
                              <SearchIcon />
                              </IconButton>
                          </InputAdornment>
                          ),
                          placeholder: 'Search Doctor by name or title',
                          style:{
                              borderRadius: '15px'
                          }
                      }}
                      />
                  </FormControl>

                  <ButtonGroup color="error" aria-label="medium secondary button group" style={{float: 'right'}}>
                    <Button key="all" variant="contained">All</Button>
                    <Button key="men">Men</Button>
                    <Button key="women">Women</Button>
                  </ButtonGroup>
                    
                </Box>
                
                <br/>
                  
                  <Grid container spacing={3}>
                    {map((state?.doctors?.users), (item) => <Grid item xs={3}>
                      <Box style={{border: '1px solid grey', borderRadius: '5px', padding: '10px'}}>
                        <div align="right">
                          <PopupState variant="popover" popupId="demo-popup-popover">
                          {(popupState) => (
                            <div>
                              <IconButton {...bindTrigger(popupState)}>
                                <MoreHoriz />
                              </IconButton>
                              <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right',
                                }}
                                transformOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right',
                                }}
                              >
                              <List>
                                <ListItem disablePadding>
                                  <ListItemButton component="a" href="#Chat">
                                    <ListItemText primary="Chat" />
                                  </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                  <ListItemButton component="a" href="#Book">
                                    <ListItemText primary="Book" />
                                  </ListItemButton>
                                </ListItem>
                              </List>
                              </Popover>
                            </div>
                          )}
                        </PopupState>
                        </div>
                        <div align="center">
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                          >
                            <Avatar sx={{ width: '90px', height: '90px' }} alt="Remy Sharp" src={`https://mui.com/static/images/avatar/${(item?.gender === 'male') ? '1' : '3'}.jpg`} />
                          </StyledBadge>
                        </div>
                        <div>
                          <h3 className='alignCenter'><b>{`dr.  ${item?.firstName} ${item?.lastName}`}</b></h3>
                          <p className='alignCenter' style={{color: '#F80D38', marginTop: '-15px'}}>{`${item?.company?.title}`}</p>
                        </div>
                        <hr style={{border: '1px solid grey', width: '80%'}}/>
                        <div align="center" style={{marginTop: '20px'}}>
                          <Button className="borderRadiusButtton widthButton1" variant="outlined" onClick={() => alert(`Chat dr.  ${item?.firstName} ${item?.lastName}`)}>Chat</Button>
                        </div>
                        <div align="center" style={{margin: '15px'}}>
                          <Button className="borderRadiusButtton widthButton1" variant="contained" onClick={() => alert(`Book dr.  ${item?.firstName} ${item?.lastName}`)}>Book</Button>
                        </div>                        
                      </Box>                      
                    </Grid>)}
                  </Grid>
                  <br/>
                  <div align="right">
                    <Pagination count={(state?.show === 10) ? 8 : 4} color="primary" onChange={(el, val) => handler.getDoctors(val)} style={{float: 'right'}} />
                  </div>
                </Paper>         
            </Box>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default DashboardContent