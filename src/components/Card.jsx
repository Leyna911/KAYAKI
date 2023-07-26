import React from 'react'
import SectionsWrapper from '../hoc/SectionsWrapper'

import { motion } from 'framer-motion'
import { styles } from '../styles'

import { products } from '../constants'
import { Tilt } from 'react-tilt'
import { textVariant,fadeIn } from '../utils/motion'



const Card = ({index,name,description,image}) => {
  return (
  
<div class="max-w-sm bg-white   rounded-xl shadow dark:bg-primary 
drop-shadow-xl w-[450px] h-[400px] ">
    <a href="#">
        <img class="w-full h-[200px] object-cover rounded-2xl" src={image} alt="" />
    </a>
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
        <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <button href="#" class="absolute bottom-5  items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6A2AF7] rounded-lg hover:bg-[#6A2AF7] focus:ring-4 focus:outline-none focus:bg-[#6A2AF7] dark:bg-[#6A2AF7] dark:hover:bg-[#6A2AF7] dark:focus:ring-[#6A2AF7]">
            Rent Now 
        </button>
    </div>
</div>

  )
}


const CardCanvas =()=>{
   return(
    <>
        <motion.div>
            <p className={styles.sectionSubText}>
                Our products
            </p>
        </motion.div>
        <div className='my-20 flex flex-wrap gap-7 justify-center'>
            {products.map((product,index)=>(
                <Card
                    key={`product-${index}` } index={index} {...product}
                />
            ))}
        </div>
    </>
   )
}




export default CardCanvas;
