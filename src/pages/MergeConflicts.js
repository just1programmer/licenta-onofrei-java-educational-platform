import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/mergeConflictsQuestions'

export default function MergeConflicts() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Merge Conflicts
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://i.ytimg.com/vi/Kdd3UnD501o/maxresdefault.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Merge Conflicts
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
            image='https://i.ytimg.com/vi/Kdd3UnD501o/maxresdefault.jpg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Merge Conflicts
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
            image='https://i.ytimg.com/vi/Kdd3UnD501o/maxresdefault.jpg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Merge Conflicts
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
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Merging Conflicts:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=xNVM5UxlFSA&ab_channel=Ihatetomatoes'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Merging Conflicts 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Merge Conflicts </Typography>
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
