import React from 'react'
import ServiceCard from './ServiceCard'

const OurServiceSection = () => {
  return (
    <section className='w-full  border-t-4 border-[#0060de]'>
        <div className='text-center mt-10'>
        <h1 className='text-[white] text-[30px] sm:text-[47px]'>Our Services</h1>
        <div className='cards w-[200px] md:w-[1200px] mx-auto md:mx-auto'>
          <ServiceCard/>
        </div>
        </div>
       </section>
  )
}

export default OurServiceSection
