'use client'
import React, { useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const WeddingVenue = () => {


  useGSAP(() => {
    const isMobile = window.innerWidth < 700

    gsap.from('.WeddingText', {
      opacity: 0,
      yPercent: 20,
      stagger: { each: 0.5 },
      ease: 'none',
      scrollTrigger: {
        trigger: '.WeddingTextCont',
        start: isMobile ? 'top 90%' : 'top 50%',
        end: isMobile ? 'top 50%' : 'top top',
        scrub: true,
        // markers: true
      }
    })
  }, [])


  return (
    <section className="h-fit max-md:h-fit  WeddingTextCont py-[10vh] flex items-center justify-center COLOR_BG_CREAM px-6">
      <div className=" text-center COLOR_TEXT_RED  ">

        {/* Top label */}
        {/* <p className="tracking-tight uppercase mb-6 Font_YV WeddingText max-md:font-semibold">
          Official Wedding Hotel
        </p> */}

        {/* Main heading */}
        {/* <h5 className="Font_C leading-none text-[7vw] max-md:text-[10vw] tracking-wide mb-10 WeddingText uppercase">
         Oberoi Marrakech
        </h5> */}

        {/* Dates */}
        {/* <div className="flex items-center justify-center gap-6 max-md:gap-2 text-sm max-md:text-[12px] tracking-wide mb-10 WeddingText">
          <span className="uppercase max-md:text-[10px]  ">Check in</span>
          <span className="font-serif text-4xl max-md:text-[20px]">14<sup className="text-xs">th</sup></span>
          <span className="uppercase max-md:text-[10px] ">November</span>

          <span className="opacity-50 max-md:text-[10px] ">–</span>

          <span className="uppercase max-md:text-[10px] ">Check out</span>
          <span className="font-serif text-4xl max-md:text-[20px]">16<sup className="text-xs">th</sup></span>
          <span className="uppercase max-md:text-[10px] ">November</span>
        </div> */}

        {/* Description */}
        <p className="max-w-xl mx-auto max-sm:text-[1rem] Font_YV leading-[20px] COLOR_TEXT_RED  WeddingText">
        All wedding events will take place at The Oberoi Marrakech, set within 28 acres of gardens and citrus orchards, just outside the bustling Medina. The hotel blends traditional Moroccan architecture with the Oberoi's signature elegance. Guests will be staying at two hotels: the Oberoi and the nearby Park Hyatt. Accommodation for both nights will be hosted by the Shariff and Jawaid families.</p>
      </div>
    </section>
  );
};

export default WeddingVenue;
