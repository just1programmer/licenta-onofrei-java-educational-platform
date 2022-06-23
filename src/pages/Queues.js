import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/queuesQuestions'


export default function Queues() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Java Queue Interface
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2020/02/Queue-in-Java.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java Queue🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            The Queue interface is present in java.util package and extends the Collection interface is used to hold the elements about to be processed in FIFO(First In First Out) order.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2020/02/Queue-in-Java.jpg'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Java Queue
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>It is an ordered list of objects with its use limited to inserting elements at the end of the list and deleting elements from the start of the list, (i.e.), it follows the FIFO or the First-In-First-Out principle.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://cdn.educba.com/academy/wp-content/uploads/2020/02/Queue-in-Java.jpg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Java if-else❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Being an interface the queue needs a concrete class for the declaration and the most common classes are the PriorityQueue and LinkedList in Java.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Java Queue:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=91CMnJeHJVc&ab_channel=AlexLee'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java Queues 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java Queues </Typography>
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
