import SectionWrapper from '../hoc/SectionsWrapper';

import { sunny,location } from '../assets';



const Weather=()=>{
  return(
    <div  className='relative bg-[#100822] w-auto h-[250px] mt-10 rounded-lg shadow drop-shadow-3xl  '>
      <div className='flex flex-row '>
        <div className='mt-8 ml-5  '>
          <h2 className='text-[28px] capitalize hidden sm:block' >It's A Beautiful Day For an <span className='text-[#ffd84b]'>outdoor</span> activity!</h2>
          <div className='flex flex-row   items-center gap-3  mt-10'>
            <img src={location} alt='location-icon'/>
            <h3 className=' text-[24px] uppercase text-[#b9b9b9] '>Tipaza</h3> 
          </div>
          <p className='text-[#8f8f8f] mt-3 ml-10'>chance of rain 0%</p>
        </div>
        <div className='flex flex-col  items-center absolute right-5 gap-4 my-2 mr-7'>
          <div className='   w-[150px] h-auto    '>
            <img src={sunny} alt='weather-state'/>
          </div>
          <span className='text-[50px] '>25°C</span>
          
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Weather,"")
