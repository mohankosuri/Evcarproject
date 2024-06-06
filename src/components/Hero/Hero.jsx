import React from 'react'
import './Hero.css'
import Arrow from '../../assets/arrow_btn.png'
import passbtn from '../../assets/pause_icon.png'
import playicon from '../../assets/play_icon.png'




const Hero = ({setPlaystatus,heroData,herocount,setHerocount,playstatus}) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
        
      </div>
      <div className='hero-explore'>
        <p>Explore the features</p>
        <img src={Arrow} alt='arrow'/>
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
         <li onClick={()=>setHerocount(0)} className={herocount===0 ? "hero-dot orange":"hero-dot"}></li>
         <li onClick={()=>setHerocount(1)} className={herocount===1 ? "hero-dot orange":"hero-dot"}></li>
         <li onClick={()=>setHerocount(2)} className={herocount===2 ? "hero-dot orange":"hero-dot"}></li>
        
        </ul>
        <div className='hero-play'>
          <img onClick={()=>setPlaystatus(!playstatus)} src={playstatus ?passbtn:playicon}/>
          <p>Sea the video</p>
        </div>

      </div>
    </div>
  )
}

export default Hero