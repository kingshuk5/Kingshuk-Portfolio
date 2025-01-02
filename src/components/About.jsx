import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { textVariant,fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
// import { scale } from 'maath/dist/declarations/src/vector3';
//import { scale } from 'maath/dist/declarations/src/vector2';

const ServiceCard =({index,title,icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className='h-14'></div>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('','',0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate Software Developer with hands-on experience in building 
        responsive and user-friendly applications using Flutter, Firebase, and 
        Node.js. I’ve developed features like live cricket scores and dynamic web pages
         for various projects, showcasing my ability to combine technical skills with 
         creative problem-solving.I am constantly learning and applying new technologies, 
         such as MongoDB, Tailwind CSS, Next.js .
         I thrive on challenges that push me to innovate and deliver impactful solutions.
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}{...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper( About,"about")