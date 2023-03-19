import React, { useState } from 'react'
import ColorList from './ColorList'

const EyeDrop = () => {
  const [eyeDropColors, setColors] = useState([])

  const startDrop = () => {
    // console.log('button')

    const resultElement = document.getElementById('result')
    if (window.Eyedropper) {
      resultElement.textContent = "このブラウザーは対応していません";
      return
    }
    /* eslint-disable-next-line */
    const eyeDropper = new EyeDropper();
    const abortController = new AbortController();
    eyeDropper.open({ signal: abortController.signal }).then((result) => {
      // resultElement.textContent = result.sRGBHex;
      console.log(result.sRGBHex)
      setColors((prev) => {
        return [...prev,{ id: "1",colorName:result.sRGBHex}]//,colortext= result.sRGBHex
      })
      // resultElement.style.backgroundColor = result.sRGBHex;
    }).catch((e) => {
      resultElement.textContent = e;
    });
    console.log(eyeDropColors)
  }
  return (
    <div>
      <button onClick={startDrop}>search color</button>
      ＜ー他のタブで色を探す
      <div id='result'>{eyeDropColors}</div>
      <ColorList eyeDropColor={eyeDropColors} />
    </div>
  )
}

export default EyeDrop