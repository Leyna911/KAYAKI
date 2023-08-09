import React, { useState } from 'react'
import { styles } from '../styles'

import { motion } from 'framer-motion'
import { KayakCanvas } from './canvas'

import { scrollToSection } from '../utils/motion'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  
  const [active, setActive] = useState('');
  const handleButtonClicked=(sectionId)=>{
    setActive(sectionId)
    scrollToSection(sectionId,setActive)
}

  const navigate = useNavigate(); 

  const handleContactClicked=()=>{
    navigate('/resultPage#contactSection')
  }
  return (
    <section className=' flex xl:flex-row flex-col    mx-20 justify-center items-center gap-7'>
      <div>
        <h1 className={`${styles.herHeadText} text-black capitalize `}>
          It's <span className='text-[#FEC600]' >summer</span> Let's enjoy it ! 
        </h1>
        <p className={`${styles.herSubText} mt-2 text-black-100 capitalize `}>
          Need a good plan for your next activity ? Go ahead and rent a <span className='text-[#d8a900]'>KAYAK</span> 
        </p>
        <div className='flex flex-row gap-3'>
          <button
           onClick={()=>handleButtonClicked('services')} 
          className="bg-[#F3BE00] hover:bg-[#daaa00] text-white font-bold py-3 px-5 my-5 rounded">
              Explore
          </button>
          <HashLink to="/resultPage#contactSection" smooth>
            <button  
            className="bg-[#afafaf] hover:bg-[#747474] text-white font-bold py-3 px-5 my-5 rounded" 
            >
                Contact
            </button>
            </HashLink>
          
        </div>
      </div>
      <div className='w-[1200px] h-[500px] '>
        <KayakCanvas/>
      </div>
    

    </section>
  )
}

export default Hero
