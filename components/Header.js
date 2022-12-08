import React from 'react'
import {
    IconButton, Box, Grid, InputAdornment,
    TextField, FormControl, Badge, Avatar,
} from '@mui/material'
import {
    Search as SearchIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material'

const Header = () => (
    <Box
    style={{
        marginTop: '20px',
        marginBottom: '20px',
        backgroundColor: '#FFFFFF',
        padding: '15px',
        height: '55px',
        borderRadius: '15px',
    }}
    >
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                    size="small"
                    style={{marginTop: '-15px'}}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment>
                            <IconButton>
                            <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                        ),
                        placeholder: 'Search Pathology Result',
                        style:{
                            borderRadius: '15px'
                        }
                    }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={1}>
                <IconButton color="inherit" style={{marginTop: '-5px'}}>
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton> | 
            </Grid>
            <Grid item xs={3}>
                <table style={{marginTop: '-20px'}}>
                    <tr>
                        <td rowSpan={3} style={{ padding: '10px' }}>
                            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg
" />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Ola Bolulatife</b></td>
                    </tr>
                    <tr>
                        <td>PATIENT</td>
                    </tr>
                </table>
            </Grid>
        </Grid>
    </Box>
)

export default Header