import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import './app.css'
import { PositionContext } from "./context";
export default function App() {
  const { flags, setFlags } = React.useContext(PositionContext);
  useEffect(() => {
    if (flags) {
      handleChangeColor(flags);
      setTimeout(() => {
        let flag = document.getElementById(flags);
        flag.style.backgroundColor = '';
        setFlags(false)
      },100)
    } 
  },[flags])
  const handleChangeColor = (flagValue) => { 
      let flag = document.getElementById(flagValue);
      
      let bgColor = flag.style.backgroundColor;
    
      flag.style.backgroundColor = bgColor ? "" : "#4D97FF26";
    
  }
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar /> <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 dis-flex">
          <div className="flags">
            <div id='green'>
              <img onClick={() => handleChangeColor(true)} src='https://scratch.mit.edu/static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg' alt='flag' width='20px' id='green-flag' />
            </div>
            <div id='red'>
              <img style={{ opacity: flags ? 1 : 0.5 }} onClick={() => handleChangeColor(false)} src="	https://scratch.mit.edu/static/assets/36fcc7dbca20720abcab01e49d4955f9.svg" alt='redbutton' id='red-flag' width='20px'/>
            </div>
          </div>
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
