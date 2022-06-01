import React from 'react'
import {Drawer,Box,Typography,IconButton,Divider,List,ListItem,ListItemButton,Link} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import data from '../javatopics'
import './TheDrawer.css'





export default function TheDrawer() {

  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  const topicItems = data.map((listItem)=> {

      return(
        <React.Fragment key={listItem.title}>
        <Link href={listItem.page} underline='none' >
        <ListItemButton href='/about'>
            <ListItem disablePadding  >
          <Typography variant='h6' sx={{color:'#BE856E',fontFamily:'monospace'}}  >
            {listItem.title}
          </Typography>
        </ListItem>
        </ListItemButton>
        </Link>
        <Divider/>
        </React.Fragment>
       
      )

  })

  return (
    <React.Fragment>
      <IconButton size='large' edge='start' sx={{color:'black'}} aria-label='logo' onClick={()=>{setIsDrawerOpen(true)}}>
        <MenuIcon/>
      </IconButton>
    <Drawer anchor='left'  open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} variant='temporary' transitionDuration={2500,1000}>
          <Box p={2} className='drawerBox'  textAlign='center' role='presentation'>
              <Typography variant='h4' sx={{textDecoration:'underline' , fontFamily:'Impact' }}>
                 Java Topics
              </Typography>
              <Divider/>
              <List>
                {topicItems}
              </List>
              
          </Box>
    </Drawer>
    </React.Fragment>
  )
}
