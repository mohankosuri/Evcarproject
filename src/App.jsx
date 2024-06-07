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

  

   return (
     <div>
     
   
      <Navbar/>

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