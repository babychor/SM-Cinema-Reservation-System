import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Footer from './Components/Footer/Footer'


const Home = () => {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Programs/>
      </div>
      <Footer/>
     </div>
  )
}

export default Home
