import Image from 'next/image'
import React from 'react'


const AboutUsOnHome = () => {
  return (
    <section className='w-full mt-16'>
        <div className='bg-[url("/bgyellow.webp")] py-4 mx-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div>
                <section>
                    <h1 className='text-4xl font-extralight ml-16 mb-4 text-wrap'>About Us</h1>
                    <p className=' mx-16 leading-8 text-justify'>At Saphyre Cloud, we believe technology should empower your business, not complicate it. 
                        Founded on a passion for helping businesses navigate the complex world of IT, we’ve been delivering reliable,
                         cost-effective IT solutions to companies of all sizes.</p>
                </section>
                <section className='mt-7'>
                    <h1 className='text-4xl font-extralight ml-16 mb-4'>Our Mission</h1>
                    <p className=' mx-16 leading-8 text-justify'>To provide customized IT services that simplify technology, secure critical assets, and support business growth.</p>
                </section>
                </div>
                <div className='image-div'>
                    <Image src="/abouthome.png" alt="home-img" width={900} height={900}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsOnHome
