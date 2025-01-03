import React from 'react'
import ServiceCard from './ServiceCard'

const OurServiceSection = () => {
  return (
    <section className='w-full 2xl:w-[100%] border-t-4 border-[#0060de]'>
        <div className='w-full text-center mt-10'>
        <h1 className='text-[#1b2635] text-[30px] sm:text-[47px]'>Our Services</h1>
        <div className='cards  mx-20 2xl:ml-72'>
          <ServiceCard/>
        </div>
        </div>
       </section>
  )
}

export default OurServiceSection
