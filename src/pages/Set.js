import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/setsQuestions'


export default function Sets() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Java Set Interface
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://abhiandroid.com/java/wp-content/uploads/2016/03/Hierarchy-of-Set-Interface.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java Set🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            The set interface is present in java.util package and extends the Collection interface is an unordered collection of objects in which duplicate values cannot be stored. It is an interface that implements the mathematical set.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://abhiandroid.com/java/wp-content/uploads/2016/03/Hierarchy-of-Set-Interface.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Set
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>This interface contains the methods inherited from the Collection interface and adds a feature that restricts the insertion of the duplicate elements.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://abhiandroid.com/java/wp-content/uploads/2016/03/Hierarchy-of-Set-Interface.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Set 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Since Set is an interface, it can be used only with a class that implements this interface. HashSet is one of the widely used classes which implements the Set interface. Now, let’s see how to perform a few frequently used operations on the HashSet. We are going to perform the following operations as follows:
<br></br><br></br>
Adding elements
<br></br><br></br>
Accessing elements
<br></br><br></br>
Removing elements
<br></br><br></br>
Iterating elements
<br></br><br></br>
Iterating through Set
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Java Set:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=Ft88V_rDO4I&ab_channel=AlexLee'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java Sets 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about Java Sets </Typography>
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
