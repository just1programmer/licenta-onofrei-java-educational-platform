import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/inheritanceQuestions'

export default function Inheritance() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
      Java Inheritance
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2019/03/What-is-Java-Inheritance.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java Inheritance🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Inheritance is an important pillar of OOP(Object-Oriented Programming). It is the mechanism in java by which one class is allowed to inherit the features(fields and methods) of another class. 

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2019/03/What-is-Java-Inheritance.jpg'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Superclasses
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           Super Class: The class whose features are inherited is known as superclass(or a base class or a parent class).

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2019/03/What-is-Java-Inheritance.jpg'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Subclasses
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Sub Class: The class that inherits the other class is known as a subclass(or a derived class, extended class, or child class). The subclass can add its own fields and methods in addition to the superclass fields and methods.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what  Java Inheritance is:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=zbVAU7lK25Q&ab_channel=AlexLee'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about  Java Inheritance 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about  Java Inheritance </Typography>
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
