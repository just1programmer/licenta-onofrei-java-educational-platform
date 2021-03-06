import React from 'react'
import './Header.css'
import {AppBar, Toolbar,Typography,Avatar,IconButton} from '@mui/material'
import TheDrawer from './TheDrawer'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import ScrollIndicator from './ScrollIndicator';

export default function Header() {
  return (
    <React.Fragment>

   
    <AppBar position='fixed' sx={{backgroundColor:'#FFC501'}} className='theAppBar'>
      
      <Toolbar>
        <TheDrawer/>
       
        <Typography variant='h3' textAlign='center'  id='brand'>
        <IconButton  color='inherit' disableRipple disableTouchRipple disableFocusRipple> <SchoolTwoToneIcon sx={{fontSize:'3em'}} /></IconButton>Java Educational Platform
    </Typography>
        <Avatar src='https://randomuser.me/api/portraits/men/62.jpg' className='myAvatar' size='small'>
        </Avatar>
      </Toolbar>
      
    </AppBar>
     <ScrollIndicator/>
    </React.Fragment>
  )
}
