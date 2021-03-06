import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/gitBranchingQuestions'

export default function GitBranching() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Git Branching
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://www.atatus.com/blog/content/images/2021/06/git-branch-workflow-2.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Git Branching🤔
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Git branching allows developers to diverge from the production version of code to fix a bug or add a feature. Developers create branches to work with a copy of the code without modifying the existing version. 
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.atatus.com/blog/content/images/2021/06/git-branch-workflow-2.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
              Git branching
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>You create branches to isolate your code changes, which you test before merging to the main branch</b> 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.atatus.com/blog/content/images/2021/06/git-branch-workflow-2.png'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Git branching
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            There is nothing special about the main branch. It is the first branch made when you initialize a Git repository using the git init command.

When you create a commit, Git identifies that snapshot of files with a unique SHA-1 hash. When you initially create a branch, Git creates a new pointer to the same commit the main branch is currently on. 
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what Git Branching is:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=qY6IooRlNGI&ab_channel=Ihatetomatoes'
controls={true}
/>


</Paper>
</Stack>
  )
}
