import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
       <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img src={Laptop} className="w-[500px] mx-auto my-4" />
              <div className='flex flex-col justify-center'>
                <p>DATA ANALYTICS CENTRALLY</p>
                <h1>Manage Data Analytics Centrally</h1>
                <p className='text-[]'>Lorem ipsum dolor,
                     sit amet consectetur adipisicing elit. 
                     Vero dolorum magni culpa maxime facere atque quibusdam aperiam natus, 
                     quos nesciunt sequi voluptatem sunt maiores quod facilis.
                      Quasi laboriosam est modi?</p>
              </div>
       </div>

        </div>
  )
}

export default Analytics