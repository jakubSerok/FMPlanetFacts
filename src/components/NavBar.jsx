import React from "react";
import Logo from "../assets/favicon-32x32.png"

function NavBar() {
  return (  
    <div className="border-b border-opacity-20">
        <div className="flex justify-between items-center h-24 max-w-[90%] mx-auto px-4">
            <img src={Logo} alt="/" />
            <ul className="flex ">
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">MERCURY</li> 
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">VENUS</li> 
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">EARTH</li>  
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">MARS</li> .
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">JUPITER</li> 
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">SATURN</li> 
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">URANUS</li>  
                <li className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 hover:border-t-4 hover:border-[#EDA249]">NAPTUNE</li>                     
            </ul>
        </div>  
    </div>
    
  );
}

export default NavBar;
