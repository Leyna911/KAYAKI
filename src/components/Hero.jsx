import React from 'react'
import { styles } from '../styles'

import { motion } from 'framer-motion'
import { KayakCanvas } from './canvas'


const Hero = () => {
  return (
    <section className=' flex xl:flex-row flex-col    mx-24 justify-center items-center gap-7'>
      <div>
        <h1 className={`${styles.herHeadText} text-black  `}>
          It's <span className='text-[#FEC600]' >summer</span> Let's enjoy it ! 
        </h1>
        <p className={`${styles.herSubText} mt-2 text-black-100 `}>
          Need a good plan for your next activity ? Go ahead and rent a KAYAK
        </p>
      </div>
      <div className='w-[1500px] h-[500px] '>
        <KayakCanvas/>
      </div>
    

    </section>
  )
}

export default Hero
