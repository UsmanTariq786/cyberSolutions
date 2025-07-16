'use client';

import React from 'react';
import Image from 'next/image';
import lockImage from '../assets/lock.png';

const LandingPage = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center justify-between gap-8">

       
        <div className="w-full md:w-1/2 z-10 md:ml-[60px]">
          <h1 className="
            font-[Montserrat] font-semibold 
            text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px]
            leading-tight
            mb-6
            max-w-[600px]
          ">
            Comprehensive <span>
            <span className="text-cyan-400">Cybersecurity</span>{' '}
            <span className="text-white">Strategies</span>
            </span> for Growth and Resilience
          </h1>

          <p className="font-[Montserrat] text-gray-300 mb-8 text-base md:text-lg max-w-xl">
            Unlock your business's full potential with our comprehensive cybersecurity strategies. Safeguard your growth and resilience in the digital age.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-cyan-400 text-black font-[Montserrat] font-semibold px-6 py-3 rounded hover:bg-cyan-300 transition">
              LEARN MORE
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-[Montserrat] px-6 py-3 rounded hover:bg-cyan-600 hover:text-white transition">
              TALK WITH US
            </button>
          </div>
        </div>

        
          <div className="w-full md:w-1/2 relative z-0 flex justify-center md:justify-start md:-mt-10">
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] h-auto">
            <Image
              src={lockImage}
              alt="Cybersecurity Lock"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingPage;
