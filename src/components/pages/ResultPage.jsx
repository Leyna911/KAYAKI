import React from 'react'

import ResultCanvas from '../Result';
import Picker from '../Picker'
import Weather from '../Weather';



const ResultPage = () => {
  return (
    <div className='bg-primary'>

        <Picker/>
        <Weather/>
    <div className=' h-[2000px] mt-[100px] justify-center '>
      <ResultCanvas/>
    </div>
    </div>
  )
}




export default ResultPage
