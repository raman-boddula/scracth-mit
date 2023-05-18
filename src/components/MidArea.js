import React from "react";

export default function MidArea() {
  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  return <div id="mid-area" onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)} className="flex-1 h-full overflow-auto">{"mid area"} </div>;
}
