import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-black px-0 py-1">
      <div className="max-w-[1388px] w-full h-[50px] mx-auto flex items-center justify-between gap-[24px] text-white px-4 ">
        {/* Brand - Iron */}
        <div
          className="text-[#54F4FC] font-[Archivo] font-semibold text-[32px] leading-[140%] border border-black px-4 py-2 -mt-[10px]"
          style={{ width: 133, height: 40 }}
        >
          Iron
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white mt-[13px]">
          <li><a href="#" className="font-[Montserrat] font-normal text-[14px] leading-[164%] tracking-wider" style={{ width: 63, height: 26, letterSpacing: '5%' }}>Pricing</a></li>
          <li className="relative group">
            <button className="font-[Montserrat] font-normal text-[14px] leading-[164%] tracking-wider whitespace-nowrap h-[26px] flex items-center" style={{ width: 73, letterSpacing: '5%' }}>
              Services <span className="ml-[2px] relative top-[1px] text-sm">▾</span>
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md p-2 min-w-[120px]">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 1</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 2</li>
            </ul>
          </li>
          <li><a href="#" className="font-[Montserrat] font-normal text-[14px] leading-[164%] tracking-wider" style={{ width: 71, height: 26, letterSpacing: '5%' }}>Support</a></li>
          <li><a href="#" className="font-[Montserrat] font-normal text-[14px] leading-[164%] tracking-wider" style={{ width: 41, height: 26, letterSpacing: '5%' }}>Blog</a></li>
          <li><a href="#" className="font-[Montserrat] font-normal text-[14px] leading-[164%] tracking-wider whitespace-nowrap" style={{ width: 95, height: 26, letterSpacing: '5%' }}>Contact us</a></li>
          <li><a href="#" className="font-[Montserrat] font-normal text-[14px] leading-[164%] tracking-wider" style={{ width: 95, height: 26, letterSpacing: '5%' }}>Reports</a></li>
        </ul>
        {/* Sign Up */}
        <div className="text-[#54F4FC] font-[Montserrat] font-semibold text-[16px] leading-[164%] tracking-wider cursor-pointer whitespace-nowrap mt-[12px]">SIGN UP</div>
      </div>
      <div className="h-[1px] bg-[#424242] mx-[32px]" />
    </nav>
  );
};

export default Navbar;

