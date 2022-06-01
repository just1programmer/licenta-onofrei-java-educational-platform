import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/variablesQuestions'
import questions from './accordionQuestions/commentsQuestions'
console.log(data);

export default function VariablesAndComments() {
  const [variablesQuestions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Java Lists
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://miro.medium.com/max/928/1*-XQpx_Kb4qqY3gwkozz4cA.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java Conditionals🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Java uses boolean variables to evaluate conditions. The boolean values true and false are returned when an expression is compared or evaluated. 

        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://appdividend.com/wp-content/uploads/2019/07/Java-If-else-Statement-Conditional-Statement-in-Java-Tutorial.png'
            height='300'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              If - else
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>The Java if statement tests the condition. It executes the if block if condition is true.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://miro.medium.com/max/1400/1*K9Zp-l72morK9SFpMj8Vrw.png'
            height='200'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Java if-else❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            The Java if-else statement also tests the condition. It executes the if block if condition is true otherwise else block is executed.
            The if-else-if ladder statement executes one condition from multiple statements.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Java Lists:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=Ft88V_rDO4I&ab_channel=AlexLee'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java Lists 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java Lists </Typography>
<section className='info'>
{variablesQuestions.map((question)=>{
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
