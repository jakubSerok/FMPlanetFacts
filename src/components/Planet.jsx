import React from "react";


function Planet(planet) {
    return(
        <div className="flex flex-col h-[90vh] px-5 py-20 max-w-[90%] mx-auto gap-4 items-center">
            <div className="h-[80%] flex w-[80%]">
                <div className="w-full">                    
                </div>
                <div className="flex flex-col max-w-[350px] gap-4 h-full">
                    <h1 className="font-['Antonio'] text-white p-4  text-[80px] font-normal leading-[17px]">MERCRY</h1>
                    <p className="text-white p-4 opacity-75 text-11 font-bold leading-[17px]">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                    <div className="flex gap-1">
                        <p className="text-white p-4 opacity-50 text-11 font-bold leading-[17px]">Source:</p>
                        <a href="" className="text-white p-4 opacity-50 text-14 font-bold leading-[17px] cursor-pointer underline">WIKIPEDIA</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="">123</button>
                        <button className="">123</button>
                        <button className="">123</button>
                    </div>                                       
                </div>
            </div>
            <div className="flex w-[80%] gap-3 font-['Spartan'] ">
                <div className="w-[100%] h-[128px] flex-col justify-between p-2 border">
                    <p className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer ">ROTATION TIME</p>
                    <h1 className="font-['Antonio'] text-white p-4  text-[40px] font-normal leading-[17px] cursor-pointer">58.6 days</h1>
                </div>
                <div className="w-[100%] h-[128px] flex-col justify-between p-2 border">
                    <p className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer ">ROTATION TIME</p>
                    <h1 className="font-['Antonio'] text-white p-4  text-[40px] font-normal leading-[17px] cursor-pointer">58.6 days</h1>
                </div>
                <div className="w-[100%] h-[128px] flex-col justify-between p-2 border">
                    <p className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer ">ROTATION TIME</p>
                    <h1 className="font-['Antonio'] text-white p-4  text-[40px] font-normal leading-[17px] cursor-pointer">58.6 days</h1>
                </div>
                <div className="w-[100%] h-[128px] flex-col justify-between p-2 border">
                    <p className="text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer ">ROTATION TIME</p>
                    <h1 className="font-['Antonio'] text-white p-4  text-[40px] font-normal leading-[17px] cursor-pointer">58.6 days</h1>
                </div>
            </div>
        </div>
    )
}

export default Planet;