import { useEffect, useState } from "react";
import {BsArrowUpCircle} from 'react-icons/bs'
import './ScrollToTop.css'

export const ScrollToTop = () =>{

    const [isVisible,setIsVisible] =useState(false)

    const toggleVisibility =()=>{
        if(window.pageYOffset>300 && window.pageYOffset<600){
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility);
    
        return () =>{
            // any time we add an event listener to the window,
            window.removeEventListener('scroll',toggleVisibility)
        }
    })


    return(
        <button onClick={scrollToTop} className="backToTop">
            <BsArrowUpCircle/>
        </button>
    )
}