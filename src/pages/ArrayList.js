import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/arrayListQuestions'


export default function ArrayList() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Java ArrayList
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://miro.medium.com/max/617/1*mLltyVdwQP6g6QJYnDIhRA.jpeg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              ArrayList🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            ArrayList is a part of collection framework and is present in java.util package. It provides us with dynamic arrays in Java.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://miro.medium.com/max/617/1*mLltyVdwQP6g6QJYnDIhRA.jpeg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
             ArrayList
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>Though, it may be slower than standard arrays but can be helpful in programs where lots of manipulation in the array is needed. This class is found in java.util package. </b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://miro.medium.com/max/617/1*mLltyVdwQP6g6QJYnDIhRA.jpeg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
             ArrayList
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Since ArrayList is a dynamic array and we do not have to specify the size while creating it, the size of the array automatically increases when we dynamically add and remove items. 
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Java ArrayList:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=1nRj4ALuw7A&ab_channel=BroCode'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java ArrayList 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java ArrayList </Typography>
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
