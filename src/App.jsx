 import React, { useState } from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { Routes,Route } from 'react-router-dom'
import Explore from './pages/Explore'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
 
 const App = () => {

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
      <Navbar/>
      <Hero setPlaystatus={setPlaystatus} 
            heroData={heroData[herocount]} 
            herocount={herocount} 
            setHerocount={setHerocount}
            playstatus={playstatus}/>


            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
             
          </Routes>

     </div>
   )
 }
 
 export default App