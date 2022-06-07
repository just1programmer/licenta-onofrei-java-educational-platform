import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/variablesQuestions'
console.log(data);

export default function Loops() {
  const [Questions,setQuestions]=useState(data)
  
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
      Java Loops
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://media.geeksforgeeks.org/wp-content/uploads/Loop1.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Looping ? 🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Looping in programming languages is a feature which facilitates the execution of a set of instructions/functions repeatedly while some condition evaluates to true. 

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.w3resource.com/w3r_images/java-for-loop-image1.png'
            height='180'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              for loop
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>The Java for loop is used to iterate a part of the program several times. If the number of iteration is fixed, it is recommended to use for loop.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://i.pinimg.com/originals/aa/54/49/aa544945e4ab3161a30c467bc4376383.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              while loop
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            The Java while loop is used to iterate a part of the program repeatedly until the specified Boolean condition is true. As soon as the Boolean condition becomes false, the loop automatically stops.
            There is also a variation of the while loop - 'do while' , which <b>executes everytime</b> the instructions at least once.
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       
<hr/>

      <Typography variant='h5' textAlign='center' my={4}>🔽These are some videos I strongly encourage you to watch , in order to better understand what Java Loops are:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=3jMaKlNBjug&ab_channel=AlexLee'
controls={true}
/>

<hr/>
<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=SGJ9DpxGCkY&ab_channel=AlexLee'
controls={true}
/>
<hr/>
<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=nfr52iR0Pyg&ab_channel=thenewboston'
controls={true}
/>


{/* 
<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java Loops 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java Loops </Typography>
<section className='info'>
{Questions.map((question)=>{
  return(
    <SingleQuestion key={question.id} {...question}/>
  )
})}
</section>
</div> */}
</Paper>
</Stack>
  )
}
