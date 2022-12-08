import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import styles from '../styles/Home.module.css'

export const mainListItems = (router) => {
  return (<React.Fragment>
    <ListItemButton onClick={() => router.push('/dashboard')}>
      <ListItemIcon>
        <img src="/img/icon-overview.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src="/img/icon-appointments.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Appointments" />
    </ListItemButton>
    <ListItemButton onClick={() => router.push('/doctors')}>
      <ListItemIcon>
        <img src="/img/icon-doctors.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Doctors" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src="/img/icon-pathology.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Pathology Results" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src="/img/icon-chats.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Chats" />
    </ListItemButton>
  </React.Fragment>)
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <b>ACCOUNT</b>
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <img src="/img/icon-settings.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src="/img/icon-logouts.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="Logouts" />
    </ListItemButton>
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment styles={{ position: 'absolute', bottom: '10px' }}>
    <a href="tel:+234929282891">
    <ListItemButton>
      <ListItemIcon>
        <img src="/img/phone.png" className={styles.logoIconSideMenu} />
      </ListItemIcon>
      <ListItemText primary="+234 92 928 2891" />
    </ListItemButton>
    </a>
  </React.Fragment>
);