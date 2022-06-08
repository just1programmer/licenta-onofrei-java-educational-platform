import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info,image}) => {
  const [showInfo,setShowInfo]=useState(false);

  const buttonHandler = () =>{
    if (showInfo===false){
      setShowInfo(true);
    }

    if (showInfo===true){
      setShowInfo(false);
    }
    
  }
  return (
    <article className='question'>
      <header>
      <Typography variant='h6' >{title}</Typography>
      <button className='btn' onClick={buttonHandler}>
        {showInfo?<AiOutlineMinus fontSize={20}/>:<AiOutlinePlus fontSize={20}/>}
      </button>
      </header>  
      {showInfo &&<Typography py={2} variant='subtitle1'>{info}</Typography>}
      {showInfo && <img src={image} width='100%'/>}  
    </article>

  );
};

export default Question;
