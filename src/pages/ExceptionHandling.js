import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/exceptionHandlingQuestions'

export default function ExceptionHandling() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Exception Handling in Java
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://www.edureka.co/blog/wp-content/uploads/2018/11/Exception-flow-Java-Exception-Handling-Edureka.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Exception Handling
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Exception Handling in Java is one of the effective means to handle the runtime errors so that the regular flow of the application can be preserved.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.edureka.co/blog/wp-content/uploads/2018/11/Exception-flow-Java-Exception-Handling-Edureka.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Exception Handling
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
            Exception is an unwanted or unexpected event, which occurs during the execution of a program, i.e. at run time, that disrupts the normal flow of the program’s instructions. Exceptions can be caught and handled by the program. When an exception occurs within a method, it creates an object. This object is called the exception object. It contains information about the exception, such as the name and description of the exception and the state of the program when the exception occurred.

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.edureka.co/blog/wp-content/uploads/2018/11/Exception-flow-Java-Exception-Handling-Edureka.png'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Exception Handling
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Major reasons why an exception Occurs:
            <br></br><br></br>
Invalid user input
<br></br>
Device failure
<br></br>
Loss of network connection
<br></br>
Physical limitations (out of disk memory)
<br></br>
Code errors
<br></br>
Opening an unavailable file
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Exception Handling:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=sQwTGB6gW-8&ab_channel=KeepOnCoding'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Exception Handling 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Exception Handling </Typography>
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
