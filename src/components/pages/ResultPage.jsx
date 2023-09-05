import React from 'react'

import ResultCanvas from '../Result';
import Picker from '../Picker'
import Weather from '../Weather';
import Contact from '../Contact';

import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const selectedLocation = new URLSearchParams(location.search).get('location')
 
  return (
    <div className='bg-primary'>
      <div className='mt-[20px]'>
        <Picker />
        </div>
        <Weather selectedLocation={selectedLocation}/>
        <section id='resultCanvasSection'>
          <div className=' h-auto mt-[100px] justify-center '>
            <ResultCanvas/>
          </div>
        </section>
    <section id='contactSection'>
      <Contact/>
    </section>
    
    
    </div>
  )
}




export default ResultPage
