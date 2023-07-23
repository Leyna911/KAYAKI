import React from 'react'

import SectionsWrapper from '../hoc/SectionsWrapper'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {services} from "../constants"
import { fadeIn,textVariant } from '../utils/motion'

const OffersCard =({index, title,icon,parag})=>{
    return(
        <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right",'spring',index*0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max:45,
                    sclae:1,
                    speed:450,
                }}
                className='bg-quaternary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='KAYAKI Services'
                    className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center '>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
    )
}

const Offers = () => {
  return (
    <>
    <motion.div
        variants={textVariant()}
    >
        <p className={styles.sectionSubText}>
            What we offer
        </p>
        <h2 className={styles.sectionHeadText}>
            Our Services. 
        </h2>
    </motion.div>
    
    <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service,index)=>(
            <OffersCard key={service.title} index={index} {...service}/>
        ))}
    </div>
    </>
  )
}



export default SectionsWrapper(Offers,"Offers") 
