import { ServicecardsArr } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'


const ServiceCard = () => {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2  xl:grid-cols-4 gap-10 sm:gap-60 md:gap-20 mt-10 ml-10 sm:ml-0'>
      {
        ServicecardsArr.map((item) => (
          <div 
          key={item.id} 
          className={cn(
            'flex flex-1 flex-col justify-center items-center py-5 gap-1 px-5 border border-gray-300 rounded-2xl shadow-2xl w-[250px] md:w-[330px] cursor-pointer  transform transition-all duration-300 hover:scale-105', 
            {
              'card1': item.id === 1, 
              'card2': item.id === 2,
              'card3': item.id ===3,
              'card4': item.id ===4,
              'card5': item.id ===5,
              'card6': item.id === 6,
              'card7': item.id === 7,
              'card8': item.id === 8
            }
          )}
        >
            <Image src={item.pic} alt='div-pic' width={100} height={100} className='mb-4'/>
            <h2 className='text-white text-justify'>{item.title}</h2>
            <p className='text-white py-6  text-sm font-bold'>{item.para}</p>
            <Link href={item.path} className='flex justify-center items-center gap-1 text-wrap' target='_blank'><Image src='/arrow.png' alt='arrow' width={16} height={16}/>
              <span className='text-white font-bold text-sm text-wrap'>Read More</span>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default ServiceCard




