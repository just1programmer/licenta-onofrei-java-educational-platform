import React from 'react'
import { useState } from 'react';
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';

import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/arraysQuestions'


export default function Arrays() {


  const [arraysQuestions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
         
    <Typography variant='h2' id='title' sx={{textDecoration:'underline', textUnderlinePosition:'under',textDecorationColor:'rgb(24, 108, 204)'}}>
      Java Arrays
    </Typography>

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/05/Arrays.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Array ☕
              </Typography>
              <Divider/>
            <Typography variant="body2" py={2} color="initial" className='details'>
        <b>An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed. </b> 
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://qph.cf2.quoracdn.net/main-qimg-8b306b4c6d47bbafe378924ab42d24ba.webp'
            height='150'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Array importance in interviews
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' py={2}>
           <b>The array is one of the most important topics for programming interviews.  </b> 

           It doesn't matter if you are going to Google, Microsoft, Amazon or investment banks like Goldman Sachs, Barclays, Citi or even service-based companies like IBM, Accenture, TCS, or Infosys, if you are going to interview for the developer position, you must prepare array very well.

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2019/11/Types-of-Array-in-Java.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Array Types 
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial"  className='details'>
            <b>Single dimensional array − A single dimensional array of Java is a normal array where, the array contains sequential elements.</b>

            <br/>
           <b> Multi-dimensional array </b> − A multi-dimensional array in Java is an array of arrays. A two dimensional array is an array of one dimensional arrays and a three dimensional array is an array of two dimensional arrays.
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
          <Typography variant='h5' textAlign='center'>🔽 Down below , you can find a short video about what Java Arrays are and how they can be used 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=xzjZy-dHHLw&ab_channel=AlexLee'
controls={true}
/>
        

<Typography variant='h5' textAlign='center'>🔽 Here are some frequently asked questions about Java Variables 🔽</Typography>

          <div className='container'>
        <Typography variant='h3'>Q&A about Java Arrays</Typography>
        <section className='info'>
          {arraysQuestions.map((question)=>{
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
