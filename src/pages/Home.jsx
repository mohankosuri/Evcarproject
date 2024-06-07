import React,{useState} from 'react'
import Background from '../components/Background/Background'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

const Home = () => {

  let heroData=[
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulgo",text2:"Your passions"},
    {text1:"Give in to",text2:"Your passions"}
  ]

  const [herocount,setHerocount]=useState(0)
  const [playstatus,setPlaystatus]=useState(false)

  return (
    <div>
    <Background playstatus={playstatus} Herocount={herocount}/>
    
    <Hero setPlaystatus={setPlaystatus} 
          heroData={heroData[herocount]} 
          herocount={herocount} 
          setHerocount={setHerocount}
          playstatus={playstatus}/>
    
    </div>
  ) 
}

export default Home