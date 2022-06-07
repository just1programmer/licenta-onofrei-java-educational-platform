import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/methodsQuestions'

console.log(data);

export default function Methods() {
  const [methodsQuestions,setQuestions]=useState(data)
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
      Java Methods
    </Typography> 


        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://i.ytimg.com/vi/r0SewFmbCUI/maxresdefault.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Methods 🤔
              </Typography>
              <Divider/>
            <Typography py={4} variant="body2" color="initial" className='details'>
        <b> A method is a block of code which only runs when it is called. </b> <br/> 
      

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.programiz.com/sites/tutorial2program/files/java-method-call.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Method call  😅
              </Typography>
              <Divider/>
            <Typography py={5} variant="body2" color="initial" className='details' >
           <b>Methods are used to perform certain actions, and they are also known as functions.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://static.javatpoint.com/core/images/method-in-java.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Method declaration 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            A method's declaration provides a lot of information about the method to the compiler, the runtime system and to other classes and objects. Besides the name of the method, the method declaration carries information such as the return type of the method, the number and type of the arguments required by the method, and what other classes and objects can call the method.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       

      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what Java Methods are:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=cCgOESMQe44&ab_channel=AlexLee'
controls={true}

/>



<Typography variant='h5' my={5} textAlign='center'>🔽 Here are some frequently asked questions about Java Methods() 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Methods</Typography>
<section className='info'>
{methodsQuestions.map((question)=>{
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
