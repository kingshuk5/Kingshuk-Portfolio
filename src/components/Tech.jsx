import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';

// const LazyBallCanvas = React.lazy(()=>import('./canvas'))
const Tech = () => {
  return (
    <><p className={styles.sectionSubText}>
      My Skils &
    </p><h2 className={styles.sectionHeadText}>
        Technologies
      </h2><div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas 
              icon={technology.icon}
              name={technology.name}
            />
          </div>
        ))}
      </div></>
  )
}

export default SectionWrapper(Tech,'')

/*<><p className={styles.sectionSubText}>
        My Skils &
      </p><h2 className={styles.sectionHeadText}>
        Technologies
        </h2>
      <section className="py-10 bg-tertiary rounded-3xl mt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center"
                style={{
                  perspective: "1000px",
                }}
              >
                <div
                  className="w-24 h-24 bg-gray-700 rounded-full shadow-lg transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain p-2"
                    style={{
                      backfaceVisibility: "hidden",
                    }} />
                </div>
                <span className="mt-4 text-white text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section></> */
