import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/stringsQuestions'



export default function Strings() {
  const [Questions,setQuestions]=useState(data)
 
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
      Java Strings
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://www.journaldev.com/wp-content/uploads/2012/11/String-Pool-Java1.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
                Strings 🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            In Java, a string is a sequence of characters. For example, "hello" is a string containing a sequence of characters 'h', 'e', 'l', 'l', and 'o'.

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://camo.githubusercontent.com/75060ced149b19c70ea1616428202bc118aaea537a568802801b3c8ac4b0e497/68747470733a2f2f342e62702e626c6f6773706f742e636f6d2f2d696d534547526174514e632f5732564969554d4b6f32492f41414141414141414339492f6731646571374a4644693066784566387468304958584f4c5f4c3579784e494477434c63424741732f73313630302f6a6176612d737472696e672d67756964652e706e67'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Java Strings
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b> We use double quotes to represent a string in Java.  </b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2018/09/String-Functions-In-Java.jpg'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              String methods❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            <b>Java has a lot of String methods that allow us to work with strings . </b>For example, if you need to find the length of a string, use the length() method.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what Java Strings are:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=3xuJIaP3C4g&ab_channel=AlexLee'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java Strings 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java Strings</Typography>
<section className='info'>
{Questions.map((question)=>{
  return(
    <SingleQuestion key={question.id} {...question}/>
  )
})}
</section>
</div>
</Paper>
</Stack>
  )
}
