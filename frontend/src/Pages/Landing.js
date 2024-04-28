import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Middle from '../components/Middle';
import Footer from '../components/Footer';
import MiddleS from '../components/MiddleS';

function Landing() {
  return (
    <div className=' max-w-screen-xl mx-auto'>
       <Navbar/>
       <Hero/>
  
       <MiddleS/>
       <Footer/>
</div>
  )
}

export default Landing