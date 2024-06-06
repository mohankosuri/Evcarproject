import React from 'react'
import './Background.css'
import Video1 from '../../assets/video1.mp4'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'

const Background = ({Herocount, playstatus}) => {
  
    
    if(playstatus){
        return (
          <video autoPlay loop muted className='background'>
      <source src={Video1} type='video/mp4'/> 
      
    
    </video>
        ) 
    }else if(Herocount===0){
      return <img src={Image1} alt='image1' className='background'/>
    }else if(Herocount===1){
      return <img src={Image2} alt='image2' className='background'/>
    }else if(Herocount===2){
      return <img src={Image3} alt='image3' className='background'/>
    }
    
    
   
 
}

export default Background