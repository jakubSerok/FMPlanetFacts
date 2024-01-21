import React,{useState} from "react";

function Planet(planet) {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
      setActiveButton(index);
    };       
    
    return(
        <div className="flex flex-col h-[90vh] px-5 py-20 max-w-[90%] mx-auto gap-4 items-center animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out ">
            <div className="fixed top-24 w-screen h-[50px] border-b border-opacity-50 flex items-center justify-center sm:hidden">
                <button className={`text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group`}onClick={()=>handleButtonClick(0)}>OVERVIEW<div className={`${activeButton===0 ? `bg-[${planet.color}]`:''} absolute bottom-[0px] left-0 right-0  h-1`}></div></button>
                <button className={` text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group`}onClick={()=>handleButtonClick(1)}>STRUCTURE<div className={`${activeButton===1 ? `bg-[${planet.color}]`:''} absolute bottom-[0px] left-0 right-0  h-1`}></div></button>
                <button className={` text-white p-4 opacity-75 text-11 font-bold leading-[17px] cursor-pointer hover:opacity-100 relative group`}onClick={()=>handleButtonClick(2)}>SURFACE<div className={`${activeButton===2 ? `bg-[${planet.color}]`:''} absolute bottom-[0px] left-0 right-0  h-1`}></div></button>
            </div>
            <div className=" h-[80%] flex-col flex w-[80%] lg:flex-row  md:justify-between ">
                <div className="relative w-full items-center justify-center flex h-full">                
                    <img style={{ display: activeButton === 0 || activeButton === 2 ? 'block' : 'none' }}className="w-[111px] lg:w-[290px] sm:w-[184px]" src={planet.img1} alt="123" />
                    <img style={{ display: activeButton === 1 ? 'block' : 'none' }}className="w-[111px] lg:w-[290px] sm:w-[184px]" src={planet.img2} alt="123" />       
                    <img style={{ display: activeButton === 2 ? 'block' : 'none' }}className="absolute w-[50px] lg:w-[158px] sm:w-[90px] top-[50%]" src={planet.img3} alt="123" />             
                </div>
                <div className="flex max-w-[350px] gap-4 h-full lg:flex-col md:flex-row md:max-w-full md:h-[250px]">
                    <div className="text-center sm:max-w-[340px] sm:text-left gap-4 flex flex-col">
                        <h1 className="font-['Antonio'] text-[40px] text-white p-4   font-normal leading-[17px] lg:text-[80px] md:text-[48px] uppercase">{planet.name}</h1>
                        <p className="text-white font-['Spartan'] p-4 opacity-75 text-11 font-bold leading-[17px]">{planet.des}</p>
                        <div className="flex justify-center gap-1 font-['Spartan']">
                            <p className="text-white p-4 opacity-50 text-11 font-bold leading-[17px]">Source:</p>
                            <a href="" className="text-white p-4 opacity-50 text-14 font-bold leading-[17px] cursor-pointer underline md">WIKIPEDIA</a>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col gap-2 font-['Spartan'] w-full ">
                        <button style={{ backgroundColor: activeButton === 0 ? planet.color : 'transparent' }} className=" border border-opacity-50 h-[48px] items-center flex gap-2 hover:bg-[#D8D8D8] hover:bg-opacity-25 md:w-full" onClick={()=>handleButtonClick(0)} ><p className="text-white p-4 opacity-50 text-12 font-bold leading-[17px]">01</p><h1 className="text-white p-4 text-12 font-bold leading-[17px]">OVERVIEW</h1></button>
                        <button style={{ backgroundColor: activeButton === 1 ? planet.color : 'transparent' }} className=" border border-opacity-50 h-[48px] items-center flex gap-2 hover:bg-[#D8D8D8] hover:bg-opacity-25 md:w-full" onClick={()=>handleButtonClick(1)}><p className="text-white p-4 opacity-50 text-12 font-bold leading-[17px]">01</p><h1 className="text-white p-4 text-12 font-bold leading-[17px]">INTERNAL STRUCTURE</h1></button>
                        <button style={{ backgroundColor: activeButton === 2 ? planet.color : 'transparent' }} className=" border border-opacity-50 h-[48px] items-center flex gap-2 hover:bg-[#D8D8D8] hover:bg-opacity-25 md:w-full" onClick={()=>handleButtonClick(2)}><p className="text-white p-4 opacity-50 text-12 font-bold leading-[17px]">01</p><h1 className="text-white p-4 text-12 font-bold leading-[17px]">SURFACE GEOLOGY</h1></button>
                    </div>                                       
                </div>
            </div>
            <div className="flex flex-col w-[90%] gap-3 font-['Spartan'] sm:flex-row sm:w-[80%]">
                <div className="w-[100%] h-[48px] items-center flex flex-row justify-between p-2 border lg:h-[128px] sm:h-[88px] sm:flex-col">
                    <p className="text-white text-8 p-4 opacity-75 font-bold leading-[17px] lg:text-11 ">ROTATION TIME</p>
                    <h1 className="font-['Antonio'] text-white text-[20px] p-4 font-normal leading-[17px] cursor-pointer lg:text-[40px] md:text-[24px]">{planet.rotate}</h1>
                </div>
                <div className="w-[100%] h-[48px] items-center flex flex-row justify-between p-2 border lg:h-[128px] sm:h-[88px] sm:flex-col">
                    <p className="text-white text-8 p-4 opacity-75 font-bold leading-[17px] lg:text-11  ">REVOLUTION TIME</p>
                    <h1 className="font-['Antonio'] text-white text-[20px] p-4 font-normal leading-[17px] cursor-pointer lg:text-[40px] md:text-[24px]">{planet.revolution}</h1>
                </div>
                <div className="w-[100%] h-[48px] items-center flex flex-row justify-between p-2 border lg:h-[128px] sm:h-[88px] sm:flex-col">
                    <p className="text-white text-8 p-4 opacity-75 font-bold leading-[17px] lg:text-11  ">RADIOUS</p>
                    <h1 className="font-['Antonio'] text-white text-[20px] p-4 font-normal leading-[17px] cursor-pointer lg:text-[40px] md:text-[24px]">{planet.rad}</h1>
                </div>
                <div className="w-[100%] h-[48px] items-center flex flex-row justify-between p-2 border lg:h-[128px] sm:h-[88px] sm:flex-col">
                    <p className="text-white text-8 p-4 opacity-75 font-bold leading-[17px] lg:text-11 ">AVERAGE TEMP.</p>
                    <h1 className="font-['Antonio'] text-white text-[20px] p-4 font-normal leading-[17px] cursor-pointer lg:text-[40px] md:text-[24px]">{planet.avg}</h1>
                </div>
            </div>
        </div>
    )
}

export default Planet;