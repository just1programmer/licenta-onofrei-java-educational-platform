import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/oopQuestions'

console.log(data);

export default function OOP() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
      Java OOP Basics
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190717114649/Object-Oriented-Programming-Concepts.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java OOP🤔
              </Typography>
              <Divider/>
            <Typography py={2} px={1} variant="body2" color="initial" className='details'>
            OOP stands for Object-Oriented Programming.
<hr/>
Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.guru99.com/images/java/052016_0704_ObjectsandC6.jpg'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
             Java OOP Advantages
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" px={2} color="initial" className='details' >
          
            <br/>
Object-oriented programming has several advantages over procedural programming:
<hr/>
<br/>
<b><ol>
  <li>OOP is faster and easier to execute </li>
  <li>OOP provides a clear structure for the programs
 </li>
  <li>OOP helps to keep the Java code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
 </li>
  <li> OOP makes it possible to create full reusable applications with less code and shorter development time
</li>
</ol>
</b>
            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.ttgtmedia.com/rms/onlineimages/whatis-object_oriented_programming_half_column_mobile.png'
            height='400'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Java Classes and Objects❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Classes and objects are the two main aspects of object-oriented programming.
            <br/>
            A class is a template for objects. 
            <hr/>
            An object is an instance of a class.

When the individual objects are created, they inherit all the variables and methods from the class.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what Java OOP  is:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=j0lBrYSlYaU&ab_channel=AlexLee'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java OOP Basics 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java OOP Basics </Typography>
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
