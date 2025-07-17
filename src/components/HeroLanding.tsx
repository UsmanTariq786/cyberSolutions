import Image from 'next/image';

const HeroLanding = () => (
  <section className="relative bg-black text-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2 z-10 md:ml-[60px]">
        <h1 className="font-[Montserrat] font-semibold text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] leading-tight mb-6 max-w-[600px]">
          Comprehensive <span className="text-cyan-400">Cybersecurity</span> <span className="text-white">Strategies</span> for Growth and Resilience
        </h1>
        <p className="font-[Montserrat] text-gray-300 mb-8 text-base md:text-lg max-w-xl">
          Unlock your business's full potential with our comprehensive cybersecurity strategies. Safeguard your growth and resilience in the digital age.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-cyan-400 text-black font-[Montserrat] font-semibold px-6 py-3 rounded hover:bg-cyan-300 transition">LEARN MORE</button>
          <button className="border border-cyan-400 text-cyan-400 font-[Montserrat] px-6 py-3 rounded hover:bg-cyan-600 hover:text-white transition">TALK WITH US</button>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative z-0 flex justify-center md:justify-start md:-mt-10">
        <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] h-auto">
          {/* Rectangle overlays */}
          <Image src="/Rectangle 17.png" alt="corner" width={40} height={40} className="absolute top-0 left-0" style={{zIndex: 2}} draggable={false} />
          <Image src="/Rectangle 18.png" alt="corner" width={40} height={40} className="absolute top-0 right-0" style={{zIndex: 2}} draggable={false} />
          <Image src="/Rectangle 19.png" alt="corner" width={40} height={40} className="absolute bottom-0 left-0" style={{zIndex: 2}} draggable={false} />
          <Image src="/Rectangle 20.png" alt="corner" width={40} height={40} className="absolute bottom-0 right-0" style={{zIndex: 2}} draggable={false} />
          <Image src="/lock.png" alt="Cybersecurity Lock" className="w-full h-auto object-contain relative z-1" width={500} height={500} priority draggable={false} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroLanding; 