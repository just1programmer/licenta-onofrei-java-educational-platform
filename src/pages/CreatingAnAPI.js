import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/creatingAnAPIQuestions'


export default function CreatingAnAPI() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Creating an API
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://d33wubrfki0l68.cloudfront.net/3df789948868c017bb3451b74856bb05e48cfad8/2af3b/assets/img/blog/2020-06-03-spring-boot-api/api.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              APIs🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://d33wubrfki0l68.cloudfront.net/3df789948868c017bb3451b74856bb05e48cfad8/2af3b/assets/img/blog/2020-06-03-spring-boot-api/api.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            APIs
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://d33wubrfki0l68.cloudfront.net/3df789948868c017bb3451b74856bb05e48cfad8/2af3b/assets/img/blog/2020-06-03-spring-boot-api/api.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              APIs
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an API is - all of this happens via API.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what a REST APIs are:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=SLwpqD8n3d0&ab_channel=ProgrammingwithMosh'
controls={true}
/>


<hr/>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=YVl6M5ztOu8&ab_channel=TheSoftwareAlpha'
controls={true}
/>


</Paper>
</Stack>
  )
}
