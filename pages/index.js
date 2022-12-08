import * as React from 'react'
import {
  Button, CssBaseline, TextField, FormControl,
  FormControlLabel, Checkbox, Link, Grid, Box,
  Container, InputLabel
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Loader from './Loader'
import useCustom from './hooks'
import styles from '../styles/Home.module.css'

const theme = createTheme()

const SignIn = () => {
  const { state, handler } = useCustom()
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.loginBg}>
        <Container className={styles.loginContainer} component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <img src="/img/x-login.png" className={styles.loginXicon} />
            <img src="/img/logo-login.png" className={styles.loginLogoIcon} />
            <Box component="form" onSubmit={handler.handleSubmit} noValidate sx={{ mt: 1 }}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="email">
                  Email
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id=""
                  name="email"
                  autoFocus
                  className={styles.inputRounded}
                />
              </FormControl>
              <br/><br/>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="password">
                  Password
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  className={styles.inputRounded}
                />
              </FormControl>
              <FormControl fullWidth>
                <Grid container>
                  <Grid item xs>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: '#100DB1', padding: 15 }}
                className={styles.inputRounded}
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <br /><br />
              <Box className='text-center'>
                Don't have an account?
                <Link href="#" variant="body2">
                  {" Create an account"}
                </Link>
              </Box>
              <br /><br />
            </Box>
          </Box>
        </Container>
      </div>
      <Loader
        openLoader={state.openLoader}
      />
    </ThemeProvider>
  )
}

export default SignIn