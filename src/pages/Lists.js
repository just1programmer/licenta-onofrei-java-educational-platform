import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/listsQuestions'

export default function Lists() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Java List Interfae
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://camo.githubusercontent.com/b24914711d892af6d10c99624bb0fa576a0611ae17eb125380c517b2059063a4/68747470733a2f2f6e657861782e696e2f77702d636f6e74656e742f75706c6f6164732f323032302f31312f6a6176612d312e676966'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               List🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Java List is an ordered collection. Java List is an interface that extends Collection interface. Java List provides control over the position where you can insert an element. You can access elements by their index and also search elements in the list.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://camo.githubusercontent.com/b24914711d892af6d10c99624bb0fa576a0611ae17eb125380c517b2059063a4/68747470733a2f2f6e657861782e696e2f77702d636f6e74656e742f75706c6f6164732f323032302f31312f6a6176612d312e676966'
        
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              List
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>Java List interface extends Collection interface. Collection interface externs Iterable interface. Some of the most used List implementation classes are ArrayList, LinkedList, Vector, Stack,</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://camo.githubusercontent.com/b24914711d892af6d10c99624bb0fa576a0611ae17eb125380c517b2059063a4/68747470733a2f2f6e657861782e696e2f77702d636f6e74656e742f75706c6f6164732f323032302f31312f6a6176612d312e676966'
             
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              List
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Since List is an interface, it can be used only with a class that implements this interface. Now, let’s see how to perform a few frequently used operations on the List.  
<br></br><br></br>
Operation 1: Adding elements to List class using add() method
<br></br><br></br>
Operation 2: Updating elements in List class using set() method
<br></br><br></br>
Operation 3: Removing elements using remove() method
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand Java Lists:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=d3QbptJRln4&ab_channel=JakobJenkov'
controls={true}
/>


</Paper>
</Stack>
  )
}
