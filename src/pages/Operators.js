import React from 'react'
import { useState } from 'react';
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';

import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/operatorsQuestions'


export default function Operators() {


  const [operatorsQuestions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
         
    <Typography variant='h2' id='title' sx={{textDecoration:'underline', textUnderlinePosition:'under',textDecorationColor:'#eaa169'}}>
      Java Operators
    </Typography>

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://4.bp.blogspot.com/-MXlPUwZc-8I/W2s-xaxxdDI/AAAAAAAAIbc/RmOb4M0dSq8uaWA2wdCW6MdhM9ApRJoaQCLcBGAs/s1600/Java%2Boperators.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
            Operators
              </Typography>
              <Divider/>
            <Typography variant="body2" py={2}  px={2} color="initial" className='details'>
            Operators in Java can be classified into 8 types:
                <ol>
                    <li> Arithmetic Operators </li>
                    <li> Unary Operators </li>
                    <li> Assignment Operators </li>
                    <li> Relational Operators </li>
                    <li> Shift Operators </li>
                    <li> Bitwise Operators </li>
                    <li> Ternary Operators </li>
                    <li> Logical Operators </li>
                </ol>






        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://appdividend.com/wp-content/uploads/2019/08/Java-Operators-Example-Operators-In-Java-Tutorial.png'
            height='350'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Arithmetic Operators 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' py={2}>
           <b>Arithmetic operators are used to perform arithmetic operations on variables and data. For example,

a + b;
Here, the + operator is used to add two variables a and b. Similarly, there are various other arithmetic operators in Java.  </b> 


        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://i0.wp.com/1.bp.blogspot.com/-LM747T0LQ1E/WcdN2EKuyBI/AAAAAAAADNc/WpkMQ8TpaWkEYZ5yjZZipF_HSZOhOhNtwCLcBGAs/s1600/unaryope1.jpg?ssl=1'
            height='350'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Unary Operators
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial"  className='details'>
            Unary operators need only one operand. They are used to increment, decrement or negate a value. 
        </Typography>
            </CardContent>
          </Card>


          
          </Grid>
       
          </Grid>


          <Typography variant='h4' textAlign='center'>
           In my opinion , 5 of them are really important : Arithmetic,Asignment, Unary, Relational and Logical Operators
              </Typography>


       
          <Typography my={5} variant='h5' textAlign='center'>🔽 Down below , you can find a short video about what Java Arithmetic Operators and Operator Precedence are and how they can be used 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=_XZ6i7cjdH8&ab_channel=NesoAcademy'
controls={true}
/>

<Typography my={8} variant='h5' textAlign='center'>🔽 Down below , you can find a short video about what Java Unary Operators are and how they can be used 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=BuMbVAN0_-8&ab_channel=NesoAcademy'
controls={true}
/>




<Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://i.ytimg.com/vi/zIQKbpmdKa4/maxresdefault.jpg'
            height='300'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
            Assignment Operator
              </Typography>
              <Divider/>
            <Typography variant="body2" py={2}  px={2} color="initial" className='details'>
            ‘=’ Assignment operator is used to assign a value to any variable. It has a right to left associativity, i.e. value given on the right-hand side of the operator is assigned to the variable on the left, and therefore right-hand side value must be declared before using it or should be a constant. 

The general format of the assignment operator is:

variable = value;
        
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://image.slidesharecdn.com/b13tcs-101kamleshsinghrawat-170504161108/85/relational-operators-4-320.jpg?cb=1493914303'
            height='300'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Relational Operators 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' py={2}>
 
            These operators are used to check for relations like equality, greater than, less than. They return boolean results after the comparison and are extensively used in looping statements as well as conditional if-else statements. The general format is, 
           <br/>
           <b> variable relation_operator value </b> 
        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://www.examtray.com/sites/default/files/styles/wordpress_800x460/public/2019-06/java-boolean-logical-operators-priotiry-table.jpg?itok=jcXIvptd'
            height='300'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
             Logical Operators
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial"  className='details'>
            These operators are used to perform “logical AND” and “logical OR” operations, i.e., the function similar to AND gate and OR gate in digital electronics. One thing to keep in mind is the second condition is not evaluated if the first one is false, i.e., it has a short-circuiting effect. Used extensively to test for several conditions for making a decision. Java also have “Logical NOT”, it returns true when condition is false and vice-versa
        </Typography>
            </CardContent>
          </Card>


          
          </Grid>
       
          </Grid>



          <Typography my={8} variant='h5' textAlign='center'>🔽 Down below , you can find a short video about what Java Assignment Operators are and how they can be used 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=QSsjB1tMPhA&ab_channel=NesoAcademy'
controls={true}
/>

<Typography my={8} variant='h5' textAlign='center'>🔽 Down below , you can find a short video about what Java Logical Operators are and how they can be used 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=p0UCTkqU2mg&ab_channel=AlexLee'
controls={true}
/>



<Typography my={8} variant='h5' textAlign='center'>🔽 Down below , you can find a short video about what Relational Operators are and how they can be used 🔽</Typography>

<hr/>


<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=EDepDr70dqg&ab_channel=NesoAcademy'
controls={true}
/>




<Typography variant='h5' textAlign='center'>🔽 Here are some frequently asked questions about Java Operators 🔽</Typography>

          <div className='container'>
        <Typography variant='h3'>Q&A about Java Operators</Typography>
        <section className='info'>
          {operatorsQuestions.map((question)=>{
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
