import React,{useState} from 'react'
import {Stack,Paper, Typography,IconButton,Card,CardMedia,CardContent,Divider,Grid} from '@mui/material'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { Box } from '@mui/system';
import './CardAndVideo.css'
import './pages_styling.css'
import ReactPlayer from 'react-player';




export default function VCSGithubAndGit() {


  return (
    <Stack spacing={1} sx={{padding:'5vw'}}>

    
   

<Paper elevation={4} sx={{minHeight:'60vh',maxWidth:'90vw',padding:'3vw' ,backgroundColor:'rgba(255,255,255,0.93)'}}>

    
<Typography variant='h2' id='title' sx={{textDecoration:'underline',textUnderlinePosition:'under'}}>
Version Control Systems : Git and Github
    </Typography> 

        <Grid container spacing={2} p={2} my={10}>
            <Grid item xs={12} sm={12} md={6} lg={4}>

            <Card className='theCard' sx={{ border: 1 }}>
            <CardMedia
            component='img'
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Git❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            Git is the most commonly used version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to.
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Git❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
           <b>Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source. </b> 
           Git is software that runs locally. Your files and their history are stored on your computer. 
           You can also use online hosts (such as GitHub or Bitbucket) to store a copy of the files and their revision history.

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Git❤️‍🔥 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
           Having a centrally located place where you can upload your changes and download changes from others, enable you to collaborate more easily with other developers. Git can automatically merge the changes, so two people can even work on different parts of the same file and later merge those changes without losing each other’s work!
  
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
            image='https://ro.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png'
            />
            <CardContent>

              <Typography variant='h5' textAlign='center'>
              Github 
              </Typography>
              <Divider/>
            <Typography py={2} variant="body2" color="initial" className='details'>
            At a high level, GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code. To understand exactly what GitHub is, you need to know two connected principles:
<br></br><br></br>
<b>
Version control
<br></br>
Git
</b>
        </Typography>
            </CardContent>
          </Card>
            </Grid>
         
            <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className='theCard' sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://ro.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png'
           
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'> 
            Github 
              </Typography>
              <Divider/>
            <Typography  py={2} variant="body2" color="initial" className='details' >
            Version control helps developers track and manage changes to a software project’s code. As a software project grows, version control becomes essential. 

            

        </Typography>
            </CardContent>
          </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card className='theCard'  sx={{ border: 1 }}>
          <CardMedia
            component='img'
            image='https://ro.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png'
            
            />
            <CardContent>
            <Typography variant='h5' textAlign='center'>
              Github 
              </Typography>
              <Divider/>
            <Typography py={3} variant="body2" color="initial"  className='details'>
            Version control lets developers safely work through branching and merging.

With branching, a developer duplicates part of the source code (called the repository). The developer can then safely make changes to that part of the code without affecting the rest of the project.

Then, once the developer gets his or her part of the code working properly, he or she can merge that code back into the main source code to make it official.

All of these changes are then tracked and can be reverted if need be.
  
        </Typography>
            </CardContent>
          </Card>
          </Grid>
       
          </Grid>


      <Typography variant='h5' textAlign='center' my={4}>🔽This is a video I strongly encourage you to watch , in order to better understand what Git and Github are:</Typography>

<ReactPlayer 
width='100%'
height='700px'
url='https://www.youtube.com/watch?v=8Dd7KRpKeaE&ab_channel=CoderCoder'
controls={true}
/>


</Paper>
</Stack>
  )
}
