import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/connectingToDBQuestions'


export default function DBConnection() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Connecting to a Database - JDBC
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://static.javatpoint.com/java/new/images/java-database-connectivity-steps.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               JDBC
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            JDBC (Java Database Connectivity) is the Java API that manages connecting to a database, issuing queries and commands, and handling result sets obtained from the database.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://images.idgesg.net/images/article/2022/05/what-is-jdbc-fig1-100927559-large.jpg?auto=webp&quality=85,70'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
             Database Connection
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>As a developer, you can use JDBC to interact with a database from within a Java program. JDBC acts as a bridge from your code to the database</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://static.javatpoint.com/java/new/images/java-database-connectivity-steps.jpg'
          
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              JDBC Architecture
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            The JDBC interface consists of two layers:

<br></br><br></br>
The JDBC API supports communication between the Java application and the JDBC manager.
<br></br><br></br>
The JDBC driver supports communication between the JDBC manager and the database driver.


        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
          <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://pc-solucion.es/wp-content/uploads/2018/04/que-es-jdbc.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               JDBC Architecture
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            There are four JDBC driver types:<b>
<br></br><br></br>
JDBC-ODBC bridge driver: A thin Java layer that uses an ODBC driver under the hood.
<br></br><br></br>
Native API driver: Provides an interface from Java to the native database client.
<br></br><br></br>
Middleware driver: A universal interface (“middleware”) between Java and the RDBMS’s vendor-specific protocol.
<br></br><br></br>
Pure Java driver: A driver that implements the vendor-specific protocol directly in Java.
<br></br><br></br>
When you start thinking about architecture and performance, it will be beneficial to consider the type of driver you are using.
</b>
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://pc-solucion.es/wp-content/uploads/2018/04/que-es-jdbc.jpg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
             SQL
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
            SQL (Structured Query Language) is used to perform operations on the records stored in the database, such as updating records, inserting records, deleting records, creating and modifying database tables, views, etc. SQL is not a database system, but it is a query language.
            
            We use SQL in order to perform database queries with the help of the JDBC.
        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://pc-solucion.es/wp-content/uploads/2018/04/que-es-jdbc.jpg'
          
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              executeQuery()
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            The executeQuery() method of the Statement interface is used to execute queries of retrieving values from the database. This method returns the object of ResultSet that can be used to get all the records of a table. 
The executeUpdate(sql query) method of the Statement interface is used to execute queries of updating/inserting.

        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand how to connect to a Database using Java :</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=e8g9eNnFpHQ&ab_channel=WittCode'
controls={true}
/>

<Typography variant='h5' textAlign='center' my={3}>🔽 Here are some frequently asked questions in the interviews: 🔽</Typography>

<div className='container'>
<Typography variant='h3'>Interview Q&A</Typography>
<section className='info'>
{ Questions.map((question)=>{
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
