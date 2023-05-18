import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { PositionContext } from "../context";

export default function Sidebar() {
  const [moveCount, setMoveCount] = useState(0);
  const { handleTurn, setLooksValue, setFlags } = React.useContext(PositionContext);
  const handleLook = (value) => {
    setLooksValue(value)
  }
  const handleSec = (sec) => {
    let flag = document.getElementById('green');
    flag.style.backgroundColor = "#4D97FF26";
    let redFlag = document.getElementById('red-flag');
    redFlag.style.opacity = 1;
    setTimeout(() => {
      flag.style.backgroundColor = '';
      redFlag.style.opacity = 0.5;
    }, sec * 1000)
  }
  useEffect(() => {
    let cat = document.getElementById('catSvg');
    cat.style.padding = `${moveCount}rem`
  }, [moveCount])
  const handleMove = () => {
    setMoveCount((prev) => prev + 1);
  }
  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div id='btn-when-clicked' draggable onDragStart={(event) => drag(event)} onClick={() => setFlags("green")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div draggable onDragStart={(event) => drag(event)} id='sprite-click' onClick={() => setFlags("red")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div id='move-10-steps' draggable onDragStart={(event) => drag(event)} onClick={handleMove} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div id='turn-15-deg' draggable onDragStart={(event) => drag(event)} onClick={() => handleTurn(false)} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div id='turn-15-deg-rev' draggable onDragStart={(event) => drag(event)} onClick={() => handleTurn(true)} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div >
        <div id='say-hello' draggable onDragStart={(event) => drag(event)} className='br-20 bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'>Say <button onClick={() => handleLook("hello")} className="looks">Hello</button></div>
        <div id='think-hmm' draggable onDragStart={(event) => drag(event)} className="br-20 bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">Think <button onClick={() => handleLook('hmm')} className="looks"> Hmmm...!</button></div>
      </div>

      <div className="font-bold"> {"Controls"} </div>
      <div >
        <div draggable onDragStart={(event) => drag(event)} id='2-sec' onClick={() => handleSec(2)} className='br-20 bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'>Wait for 2 seconds</div>
        <div draggable onDragStart={(event) => drag(event)} id='5-sec' onClick={() => handleSec(5)} className="br-20 bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">wait for 5 seconds </div>
      </div>
    </div>
  );
}
