import React from 'react'
import { useState } from 'react';
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';

import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/readingInputQuestions'


export default function ReadingUserInput() {


  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
         
    <Typography variant='h2' id='title' sx={{textDecoration:'underline', textUnderlinePosition:'under',textDecorationColor:'#eaa169'}}>
      Reading user Input
    </Typography>

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://www.besanttechnologies.com/wp-content/uploads/2019/05/java-input-and-output.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Reading User input
              </Typography>
              <Divider/>
            <Typography variant="body2" py={2} color="initial" className='details'>
        <b> One of the remarkable things in a programming language is that we can write programs to which users can interact. Java programming allows a user to enter data by means of the Scanner class. </b> 
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2020/05/template-33.jpg'
            height='350'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Scanner Class
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' py={2}>
            Scanner class provides several methods that can be used to achieve different functionalities such as reading, parsing the data, etc. In java, the scanner class is one of the simplest, easiest, and most widely used ways of getting input from users.
        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/02/Java-Scanner-Class.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Scanner Class
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial"  className='details'>
            So the Scanner class is used to read input of in-built data types like int, double, float, strings, etc. from the user, and this class belongs to the java.util package. Scanner class breaks the input into tokens/parts using a delimiter a sequence of one or more characters that is used to separate independent values which is by default whitespace. It is the easiest way to take input in Java.
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
          <Typography variant='h5' textAlign='center'>🔽 Down below , you can find a short video about Reading input in Java 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=Wgkb0zg7WOM&ab_channel=AlexLee'
controls={true}
/>
        

<Typography variant='h5' textAlign='center' my={7}>🔽 Here are some frequently asked questions about <b> Scanner Class </b>🔽</Typography>

          <div className='container'>
        <Typography variant='h3'>Q&A about Java Input</Typography>
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
