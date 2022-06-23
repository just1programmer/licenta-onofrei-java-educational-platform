import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/hashTableHashMapQuestions'

export default function HashTableHashMap() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Java Hashtables and HashMaps 
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://www.edureka.co/blog/wp-content/uploads/2019/09/HashMap-in-Java-JavaHashMap-vs-Hashtable-Edureka-300x244.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Java Hashtable🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            The Hashtable class implements a hash table, which maps keys to values. Any non-null object can be used as a key or as a value. To successfully store and retrieve objects from a hashtable, the objects used as keys must implement the hashCode method and the equals method.  
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.edureka.co/blog/wp-content/uploads/2019/09/HashMap-in-Java-JavaHashMap-vs-Hashtable-Edureka-300x244.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              HashMap
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>HashMap is a part of Java’s collection since Java 1.2. This class is found in java.util package. It provides the basic implementation of the Map interface of Java.</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.edureka.co/blog/wp-content/uploads/2019/09/HashMap-in-Java-JavaHashMap-vs-Hashtable-Edureka-300x244.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              HashMap 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            HashMap is similar to HashTable, but it is unsynchronized. It allows to store the null keys as well, but there should be only one null key object and there can be any number of null values.  This class makes no guarantees as to the order of the map. To use this class and its methods, you need to import java.util.HashMap package or its superclass.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽These are videos I strongly encourage you to watch , in order to better understand  Java Hashtables and HashMaps :</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=70qy6_gw1Hc&ab_channel=AlexLee'
controls={true}
/>
<hr/>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=z5tZ0Zb5rJQ'
controls={true}
/>


<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions about Java Hashtables and HashMaps  🔽</Typography>

<div className='container'>
<Typography variant='h3'>Q&A about  Java Hashtables and HashMaps  </Typography>
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
