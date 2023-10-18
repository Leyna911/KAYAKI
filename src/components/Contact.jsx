import React, { useRef } from 'react'
import { useState,useEffect } from 'react'

import { motion } from 'framer-motion'

import emailjs from "@emailjs/browser"

import SectionsWrapper from '../hoc/SectionsWrapper'
import { slideIn } from '../utils/motion'



//template_navc4y8
//service_mmoqmcc
//5_8eoHPj5GL7i6Ivp


const Contact = () => {
    const formRef=useRef();
    const [form,setForm]=useState({
        name:"",
        email:"",
        message:"",
    });

    const [loading,setLoading] =useState(false);
    const handleChange=(e)=>{
      const {target} = e;
      const {name,value} =target;

      setForm({
        ...form ,
        [name]: value,
      })
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      setLoading(true);
      emailjs
        .send(
          'service_mmoqmcc',
          'template_gmu9nah',
          {
            form_name: form.name,
            to_name:"Yousra Lina Boudchicha",
            from_email:form.email,
            to_email:'yl.boudchicha@esi-sba.dz',
            message:form.message,
          },
          '5_8eoHPj5GL7i6Ivp'
        )
        .then(
          ()=>{
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.")

            setForm({
              name:"",
              email:"",
              message:"",
            })
          },
          (error)=>{
            setLoading(false);
            console.error(error);

            alert("Ahhy, something went wrong ! Please try again. I'll wait for your message.")
          }
        )

    }

    

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-[#100822] p-8 rounded-[5px]'
      >
        <p className='sm:text-[18px] text-[14px] text-[#cccccc] uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name"
                  className='bg-[#f1f1f1] py-4 px-6 placeholder:text-secondary text-black rounded-[5px] outline-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className='bg-[#f1f1f1] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <input 
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message"
              className='bg-[#f1f1f1] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium' 
            />
          </label>
          <button  
            type='submit'
            className='bg-[#6A2AF7] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      
    </div>
  )
}

export default SectionsWrapper(Contact,"")
