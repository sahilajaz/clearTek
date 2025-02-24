import { ServicecardsArr } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'


const ServiceCard = () => {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2  xl:grid-cols-3 gap-9 sm:gap-60 md:gap-6 mt-10'>
      {
        ServicecardsArr.map((item) => (
          <div 
          key={item.id} 
          className={cn(
            'flex px-2 flex-1 flex-col mr-20 ml-[-40px] sm:mr-0 sm:ml-0 py-5 gap-1  border border-gray-300 rounded-2xl shadow-2xl w-[300px] md:w-[330px]  cursor-pointer  transform transition-all duration-300 hover:scale-105 card')}
        >
            <h2 className='text-white font-bold text-xl capitalize'>{item.title}</h2>
            <p className='text-white px-1 py-6 text-sm font-light'>{item.para}</p>
            <Link href={item.path} className='flex justify-center items-center gap-1 text-wrap'><Image src='/arrow.png' alt='arrow' width={16} height={16} className='text-white-200'/>
              <span className='text-white text-sm text-wrap font-light'>Read More</span>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default ServiceCard




