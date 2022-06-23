import React from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import ReactPlayer from 'react-player';
export default function UnitTestingJUnit() {
  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw'}}>

    
        
 
<Typography variant='h2' id='title'>
      Java Unit Testing☕
    </Typography>
        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard'>
            <CardMedia
            component='img'
            image='https://media3.giphy.com/media/fwbZnTftCXVocKzfxR/200.webp?cid=ecf05e475l50emwlnh7nk9g0uzmo42w0phb71w94d4wfmb6m&rid=200.webp&ct=g'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Unit Testing
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details'>
            Unit Testing is a crucial step in software design and implementation.

It not only improves the efficiency and effectiveness of the code, but it also makes the code more robust and reduces the regressions in future development and maintenance.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard'>
          <CardMedia
            component='img'
            image='https://media0.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Testing😓
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial" className='details' >
            Unit Testing is a methodology of testing source code for its fitment of use in production.

We start out writing unit tests by creating various test cases to verify the behaviors of an individual unit of source code.
Then the complete test suite executes to catch the regressions, either in the implementation phase or while building packages for various stages of deployments such as staging and production.
        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard' >
          <CardMedia
            component='img'
            image='https://media0.giphy.com/media/h408T6Y5GfmXBKW62l/200.webp?cid=ecf05e47z8x89zcfkyelxl8voqwdx45id2w4y25qaufxfccf&rid=200.webp&ct=g'
            height='250'
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Popularity❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial"  className='details'>
            <b>As of 2019, Java was one of the most popular programming languages in use according to GitHub</b>, particularly for client–server web applications, with a reported 9 million developers.

            The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them.

        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
   
<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=l9AzO1FMgM8&ab_channel=Fireship'
controls={true}
/>
        
      
   

</Paper>
</Stack>
  )
}
