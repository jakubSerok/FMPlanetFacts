import React,{ useState } from "react";
import NavBar from "./components/NavBar";
import Planet from "./components/Planet";
import planetData from "./planets";

function App() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (  
    <div>
      <NavBar onButtonClick={handleButtonClick}/>           
        <Planet
        name={planetData[activeButton].name}
        des={planetData[activeButton].des}
        color={planetData[activeButton].color}
        img1={planetData[activeButton].img1}
        img2={planetData[activeButton].img2}
        img3={planetData[activeButton].img3}
        rotate={planetData[activeButton].rotate}
        revolution={planetData[activeButton].revolution}
        rad={planetData[activeButton].rad}
        avg={planetData[activeButton].avg}
        />      

    </div>  
  );
}

export default App;
