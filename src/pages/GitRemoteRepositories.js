import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/gitRemoteQuestions'

export default function GitRemoteRepositiories() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Git Remote Repositories
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://blog.axosoft.com/wp-content/uploads/2018/05/push-and-pull.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Git Remotes🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            In Git, the term remote is concerned with the remote repository. It is a shared repository that all team members use to exchange their changes.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://blog.axosoft.com/wp-content/uploads/2018/05/push-and-pull.png'
          
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Git Remotes
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>A remote repository is stored on a code hosting service like an internal server, GitHub, Subversion, and more. </b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://blog.axosoft.com/wp-content/uploads/2018/05/push-and-pull.png'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
            Git Remotes
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            In the case of a local repository, a remote typically does not provide a file tree of the project's current state; as an alternative, it only consists of the .git versioning data.

The developers can perform many operations with the remote server. These operations can be a clone, fetch, push, pull, and more.
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what Git Remotes are:</Typography>

<ReactPlayer 
width='100%'
height='750px'
url='https://www.youtube.com/watch?v=5ctkqMqG6G4&ab_channel=CraftQuest'
controls={true}
/>


</Paper>
</Stack>
  )
}
