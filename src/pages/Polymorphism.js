import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/polymorphismQuestions'


export default function Polymorphism() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
      Java Polymorphism
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2020/02/java-polymorphism.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java Polymorphism🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Polymorphism is the ability of an object to take on different forms. In Java, polymorphism refers to the ability of a class to provide different implementations of a method, depending on the type of object that is passed to the method.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2020/02/java-polymorphism.jpg'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              If - else
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
            Polymorphism is a feature of the object-oriented programming language, Java, which implies that you can perform a single task in different ways. In the technical world, polymorphism in Java allows one to do multiple implementations by defining one interface. 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2020/02/java-polymorphism.jpg'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
             Java Polymorphism 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            You can perform Polymorphism in Java via two different methods:
            <br/>
            <br/>
1.Method Overloading
<br/>
2.Method Overriding
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what  Java Polymorphism is:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=Ft88V_rDO4I&ab_channel=AlexLee'
controls={true}
/>

<hr/>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=E-0MMeNi5Cw&ab_channel=BroCode'
controls={true}
/>



<hr/>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=kArGE1-vRrw&ab_channel=BroCode'
controls={true}
/>






<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about  Java Polymorphism 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about  Java Polymorphism </Typography>
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
