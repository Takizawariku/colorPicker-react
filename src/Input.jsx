import React, { useState, useRef } from 'react'
import ColorList from './ColorList'
import Color from './Color'

const Input = () => {
    const [colors, setColors] = useState([])
    const pickTextRef = useRef()

    const startDrop = () => {
        const resultElement = document.getElementById('result')
        if (window.Eyedropper) {
            resultElement.textContent = "このブラウザーは対応していません";
            return
        }
        /* eslint-disable-next-line */
        const eyeDropper = new EyeDropper();
        const abortController = new AbortController();
        eyeDropper.open({ signal: abortController.signal }).then((result) => {
            console.log(result.sRGBHex)
            setColors((prev) => {
                const removesh = result.sRGBHex.slice(1)
                console.log(removesh)
                return [...prev, { id: "1", colorName: removesh }]
            })
        }).catch((e) => {
            resultElement.textContent = e;
        });
    }
    const handlePick = () => {
        const colorName = pickTextRef.current.value
        console.log(colorName)
        if (colorName === "") return
        setColors((prevColor) => {
            return [...prevColor, { id: "1", colorName: colorName }]
        })
        pickTextRef.current.value = null

    }
    return (
        <div>
            <button onClick={startDrop}>search color</button>
            ＜ー他のタブで色を探す
            <div id='result'></div>

            カラーコードを入力例FFFFF
            <input type="text" ref={pickTextRef}></input>
            <button onClick={handlePick}>check</button>
            <ColorList colors={colors} />

        </div>
    )
}

export default Input