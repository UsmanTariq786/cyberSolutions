import Image from 'next/image';

const HeroLanding = () => (
  <section className="relative w-full min-h-screen bg-black flex items-center overflow-hidden">
    {/* Background Lock Image */}
    <div className="hidden md:block absolute top-0 right-0 h-full w-[50vw] z-0 pointer-events-none flex justify-end" style={{ right: '30px' }}>
      <div className="relative h-full w-full">
        <img src="/Rectangle 17.png" alt="corner" width={20} height={20} className="absolute" style={{ top: '8%', left: '20%' }} draggable={false} />
        <img src="/Rectangle 18.png" alt="corner" width={20} height={20} className="absolute" style={{ top: '8%', right: 0 }} draggable={false} />
        <img src="/Rectangle 19.png" alt="corner" width={20} height={20} className="absolute" style={{ bottom: '12%', left: '20%' }} draggable={false} />
        <img src="/Rectangle 20.png" alt="corner" width={20} height={20} className="absolute" style={{ bottom: '12%', right: 0 }} draggable={false} />
        <img
          src="/lock.png"
          alt="Cybersecurity Lock"
          className="h-full w-full object-contain absolute"
          draggable={false}
          style={{ objectPosition: 'right center', maxWidth: '100%', maxHeight: '100%', right: 35 }}
        />
      </div>
    </div>
    {/* Text Content */}
    <div className="relative z-10 w-full md:w-[65%] px-6 py-20" style={{ marginLeft: 65 }}>
      <h1 className="font-[Montserrat] font-semibold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight mb-6 max-w-[900px]">
        Comprehensive<br />
        <span className="text-cyan-400">Cybersecurity</span> Strategies<br />
        for Growth and Resilience
      </h1>
      <p className="font-[Montserrat] text-gray-300 mb-8 text-base md:text-lg max-w-xl">
        Unlock your business's full potential with our comprehensive cybersecurity strategies. Safeguard your growth and resilience in the digital age.
      </p>
      <div className="flex gap-4 flex-wrap">
        <button className="bg-cyan-400 text-black font-[Montserrat] font-semibold px-6 py-3 rounded hover:bg-cyan-300 transition">LEARN MORE</button>
        <button className="border border-cyan-400 text-cyan-400 font-[Montserrat] px-6 py-3 rounded hover:bg-cyan-600 hover:text-white transition">TALK WITH US</button>
      </div>
    </div>
  </section>
);

export default HeroLanding; 