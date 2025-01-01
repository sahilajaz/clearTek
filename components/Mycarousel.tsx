'use client'

import Image from "next/image";
import TextAnimation from "./TextAnimation";
import { carouselPic } from "@/constants";
import { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
  
  const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handlePrevious = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? carouselPic.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselPic.length - 1 ? 0 : prevIndex + 1
      );
    };

     useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === carouselPic.length - 1 ? 0 : prevIndex + 1
        );
      }, 7000)

       return () => clearInterval(interval)
     })

    return (
      <div className="h-[650px] w-full relative">
        <div className="h-full w-full ml-0">
          {carouselPic.map((item, index) => (
            <div
              key={item.id}
              className={`absolute transition-opacity duration-700 ease-in-out w-[100%] sm:w-[100%] h-[100%] ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
             
            >
              <Image
                src={item.pic}
                alt="Slide"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <p className="absolute text-white carouselText pt-52 sm:pt-0">
                {index === activeIndex && (
                  <TextAnimation text1={item.text1} text2={item.text2} />
                )}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevious}
          className="absolute top-[300px] sm:top-[320px] left-10 z-20 text-white text-3xl"
          aria-label="Previous Slide"
        >
          <GrPrevious />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-[300px] sm:top-[320px] right-10 z-20 text-white text-3xl"
          aria-label="Next Slide"
        >
          <GrNext />
        </button>
      </div>
    );
  };
  
  export default Carousel;