import React from 'react'

import Navbar from '../Navbar'
import Hero from '../Hero'
import Picker from '../Picker'
import Offers from '../Offers'
import CardCanvas from '../Card'


const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className="relative z-100  ">
            <Navbar/>   
        </div >
        
        <div className=" py-24">
          <Hero />
          <Picker />
        </div>   
          <Offers />
          <CardCanvas/>
      </div>
  )
}

export default Home
