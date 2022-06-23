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
            image='https://assets-global.website-files.com/5eb9845c0972c01cdaec8415/61b833d53613d17360092a7e_unit-testing.png'
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
            image='https://assets-global.website-files.com/5eb9845c0972c01cdaec8415/61b833d53613d17360092a7e_unit-testing.png'
           
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
            image='https://assets-global.website-files.com/5eb9845c0972c01cdaec8415/61b833d53613d17360092a7e_unit-testing.png'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Testing☕ 
              </Typography>
              <Divider/>
            <Typography variant="body2" color="initial"  className='details'>
            It's a good idea to keep the test classes separate from the main source code. So, they are developed, executed and maintained separately from the production code.

Also, it avoids any possibility of running test code in the production environment.

We can follow the steps of the build tools such as Maven and Gradle that look for src/main/test directory for test implementations.

        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
   
<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=vZm0lHciFsQ&ab_channel=CodingwithJohn'
controls={true}
/>
        
      
   

</Paper>
</Stack>
  )
}
