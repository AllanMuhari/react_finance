import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold p-2'>GROWING WIH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for </p>
                    <span className='md:text4xl sm:text-3xl text-xl font-bold pt-2 ml-2'>
                       <Typewriter
                         words={['BTB','BTC','SASS', ]}
                         loop={5}
                         cursor
                         cursorStyle='_'
                         typeSpeed={120}
                         deleteSpeed={160}
                         delaySpeed={1000}
                       />
                      </span>
        
                </div>
        </div>
        
        </div>
  )
}

export default Hero