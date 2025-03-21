import React from 'react';
import { motion } from 'framer-motion';
import { useState,useRef } from 'react';
import { slideIn} from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import emailjs from '@emailjs/browser';
import {EarthCanvas} from './canvas';
import.meta.env;


const Contact = () => {
  const fromRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading] = useState(false);

  const handleChange =(e)=>{
    const {target} = e;
    const {name,value} = e.target;

    setForm({...form,[name]:value});

  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.VITE_EMAIL_SERVICE_KEY,
      process.env.VITE_EMAIL_TEMPLATE_KEY,
      {
        from_name:form.name,
        to_name:'Kingshuk Hazra',
        from_email:form.email,
        to_email:'kingshukhazra5@gmail.com',
        message:form.message,
      },
      process.env.VITE_USER_ID_EMAILJS
    ).then(()=>{
      setLoading(false);
      alert('Thank you for your message. I will get back to you soon.');
      setForm({
        name:'',
        email:'',
        message:'',
      });
    },
    (error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    }
    );   
  }

  return (
    <div  className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={fromRef}
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
        >
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'> Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'> Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white rounded-xl shadow-primary shadow-md font-bold hover:bg-opacity-90'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");