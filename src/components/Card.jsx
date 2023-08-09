import React from 'react'


import { motion } from 'framer-motion'
import { styles } from '../styles'

import { products } from '../constants'
import { Tilt } from 'react-tilt'
import { textVariant,fadeIn } from '../utils/motion'
import { HashLink } from 'react-router-hash-link'



const Card = ({index,name,description,image}) => {
  return (
  
<motion.div className="max-w-sm bg-white   rounded-xl shadow dark:bg-primary drop-shadow-xl w-[450px] h-[400px] group hover:shadow-xl transition-shadow">
        <span className='absolute  w-1 h-full bg-yellow-400 transform translate-x-[-100%] opacity-0 group-hover:opacity-100 transition-opacity' />
    <a href="#">
        <img className="w-full h-[200px] object-cover rounded-2xl" src={image} alt="" />
    </a>
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
        <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <HashLink to="/resultPage#resultCanvasSection" smooth>
            <button href="#" className="absolute bottom-5  items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6A2AF7] rounded-lg hover:bg-[#6A2AF7] focus:ring-4 focus:outline-none focus:bg-[#6A2AF7] dark:bg-[#6A2AF7] dark:hover:bg-[#6A2AF7] dark:focus:ring-[#6A2AF7]">
                Discover 
            </button>
        </HashLink>
    </div>
    
</motion.div>

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
        <div className='mt-20 flex flex-wrap gap-7 justify-center '>
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
