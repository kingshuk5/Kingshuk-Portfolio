import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {Androidprojects, projects} from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
// import { scale } from 'maath/dist/declarations/src/vector2';


const ProjectCard =({index,description,name,tags,image, source_code_link})=>{
  return(
    // <motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={()=>window.open(source_code_link,'blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='github' className='w-8 h-8 object-contain'/>
            </div>

          </div> */}
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <span 
              key={tag.name}
              className={`text-[14px] font-semibold rounded-full px-1 py-1 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    //</motion.div>
  )
}

const AndroidCard =({index,description,name,tags,image, source_code_link})=>{
  return(
      <div className='bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full'>
        <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 md:mx-20 mx-14">         
          <div class="group hover:rotate-12 origin-bottom-right duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
          <img 
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl p-1'
          />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <span 
              key={tag.name}
              className={`text-[14px] font-semibold rounded-full px-1 py-1 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>


  )
}


const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      {/* </motion.div> */}

      <div className='w-full flex'>
        {/* <motion.div
          variants={fadeIn('','',0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl  leading-[30px]'
        > */}
        <div className='mt-3 text-secondary text-[17px] max-w-3xl  leading-[30px]'>
            Following projects showcases my skills and experience through real-world examples 
            of my work. Each project is briefly described with links to code repositories
            and live demos in it. It reflects my ability to solve complex problems,
            work with different technologies, and manage projects effectively.
          </div>
        {/* </motion.div> */}
      </div>
    
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index)=>(
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {Androidprojects.map((project,index)=>(
          <AndroidCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper( Works,'')