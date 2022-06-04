import React from 'react'
import './Footer.css'
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
<AppBar position='static' color='primary' className='footer'>
      <Toolbar>
        <IconButton sx={{color:'black'}}>
          <CopyrightIcon/>
        </IconButton>
        <Typography variant='h6'  id='copyright'>
           Copyright 2022 Java Educational Platform
        </Typography>
        <IconButton sx={{color:'black'}} href='https://www.facebook.com'>
          <FacebookIcon/>
        </IconButton>
        <IconButton sx={{color:'black', marginRight:'2vw'}} href='https://www.instagram.com/java.edu.platform/'>
          <InstagramIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
