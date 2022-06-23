import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';
import SingleQuestion from './accordionQuestions/singleQuestion';

import data from './accordionQuestions/pullRequestQuestions'


export default function PullAndMergeRequests() {
  const [Questions,setQuestions]=useState(data)

  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Pull and Merge Requests
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://www.simplilearn.com/ice9/free_resources_article_thumb/pull_request_vs_merge_request.jpg'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
               Pull Requests vs Merge requests
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Essentially, these requests are nothing more than a short message to someone with a description of changes made to a branch. By sending a pull request or merge request, you’re asking the receiver of the request to review those changes prior to merging them into another branch.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.simplilearn.com/ice9/free_resources_article_thumb/pull_request_vs_merge_request.jpg'
             
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Pull Requests vs Merge requests
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
            There’s often confusion between terms pull request vs. merge request. That confusion lies in the fact that a pull request and a merge request are actually one and the same—but they differ depending on which sites they’re used.

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://www.simplilearn.com/ice9/free_resources_article_thumb/pull_request_vs_merge_request.jpg'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
            Pull Requests vs Merge requests
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            There are three major benefits of using a pull request:

            <br></br>    <br></br>
            Communication between developers - The first is that you can easily summarize software features and fixes into identifiable containers, aka service providers like GitHub or Bitbucket. It also enables development teams to leave comments and view changes in one place.
            <br></br>    <br></br>
            Accessibility to merge tools
            <br></br>   <br></br>
            Clear history of changes - A major highlight of using a pull request is that the team will be able to see any changes between the main branch and the feature branch. Additionally, any discussions are recorded and stored in chronological order.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>
       
       


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what  Pull and Merge Requests are:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=z8CYDyFqzp0&ab_channel=Simplilearn'
controls={true}
/>


<hr/>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=dO9BtPDIHJ8&ab_channel=EnvatoTuts%2B
'
controls={true}
/>


</Paper>
</Stack>
  )
}
