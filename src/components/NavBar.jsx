import React,{useState} from "react";
import Arrow from "../assets/icon-chevron.svg"
import {AiOutlineMenu}  from "react-icons/ai";

function NavBar() {
  const [nav,setNav] =useState(true);

    const handleNav =()=>{
        setNav(!nav);
    }
  return (  
    <div className="border-b border-opacity-20">
        <div className="flex justify-between h-24 items-center max-w-[90%] mx-auto px-4 lg:flex-row  sm:flex-col sm:justify-around sm:py-4">
            <p className="text-white text-[28px] font-normal font-['Antonio'] uppercase">THE PLANETS</p>
            <ul className="hidden sm:flex font-['Spartan']">
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">MERCURY <div className="absolute top-[-20px] left-0 right-0 bg-[#419EBB] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">VENUS <div className="absolute top-[-20px] left-0 right-0 bg-[#EDA249] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">EARTH <div className="absolute top-[-20px] left-0 right-0 bg-[#6D2ED5] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">MARS <div className="absolute top-[-20px] left-0 right-0 bg-[#D14C32] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">JUPITER <div className="absolute top-[-20px] left-0 right-0 bg-[#D83A34] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">SATURN <div className="absolute top-[-20px] left-0 right-0 bg-[#CD5120] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">URANUS <div className="absolute top-[-20px] left-0 right-0 bg-[#1EC1A2] h-1 group-hover:block hidden"></div> </li>
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group">NEPTUN <div className="absolute top-[-20px] left-0 right-0 bg-[#2D68F0] h-1 group-hover:block hidden"></div> </li> 
            </ul>
            <div onClick={handleNav} className="cursor-pointer sm:hidden">
                <AiOutlineMenu size={25} className="text-white"/>            
            </div>
        </div>  
        <div className={!nav?'fixed left-0 top-15 w-full h-full z-10 text-center ease-in-out duration-500':'fixed left-[-100%] '}>                                                
          <ul className="uppercase p-4  font-['Spartan']">                      
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#DEF4FC"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">MERCURY</p>                
              </div>
              <img src={Arrow} alt="" />
            </li> 
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#F7CC7F"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">VENUS</p>                
              </div>
              <img src={Arrow} alt="" />
            </li> 
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#545BFE"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">EARTH</p>                
              </div>
              <img src={Arrow} alt="" />
            </li> 
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#FF6A45"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">MARS</p>                
              </div>
              <img src={Arrow} alt="" />
            </li>          
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ECAD7A"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">JUPITER</p>                
              </div>
              <img src={Arrow} alt="" />
            </li> 
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#FCCB6B"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">SATURN</p>                
              </div>
              <img src={Arrow} alt="" />
            </li>          
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#65F0D5"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">URANUS</p>                
              </div>
              <img src={Arrow} alt="" />
            </li> 
            <li className="flex w-full h-[65px] justify-between items-center border-b border-opacity-[0.1px] px-2">
              <div className="flex gap-1 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#497EFA"/></svg>
                <p className="text-white p-4 text-11 font-bold leading-[17px] cursor-pointer">NEPTUN</p>                
              </div>
              <img src={Arrow} alt="" />
            </li>                                   
          </ul>            
        </div>
    </div>
    
  );
}

export default NavBar;
