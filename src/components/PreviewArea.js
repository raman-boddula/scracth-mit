import React, { useEffect, useState } from "react";
import CatSprite from "./CatSprite";
import { PositionContext } from "../context";

export default function PreviewArea() {
  const { value, looksValue } = React.useContext(PositionContext);

  useEffect(() => {
    let x = document.getElementById('catSvg');
    x.style.transform = 'rotate(' + value + 'deg' + ')';
  }, [value])

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div id="catSvg">
        <CatSprite />
      </div>
      <div className="message-box">
        {looksValue === 'hello' ?
          <>
            <img src='https://u7.uidownload.com/vector/55/1013/vector-cartoon-speech-bubble-svg.jpg' alt='comment' width='80px' className='position-relative ' />
            <p className='position-absolute text-align'>Hello...</p>
          </> : looksValue === 'hmm' ? <><img src='https://i.etsystatic.com/36262552/r/il/34f82c/4616753583/il_570xN.4616753583_htze.jpg' alt='hmm' width='125px' className='position-relative ' />
            <p className='position-absolute text-align-hmm'>Hmmm...</p></> : null}
      </div>
    </div>
  );
}
