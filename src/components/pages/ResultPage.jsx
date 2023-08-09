import React from 'react'

import ResultCanvas from '../Result';
import Picker from '../Picker'
import Weather from '../Weather';
import Contact from '../Contact';


const ResultPage = () => {
  return (
    <div className='bg-primary'>
      <div className='mt-[20px]'>
        <Picker/>
        </div>
        <Weather/>
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
