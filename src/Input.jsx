import React, { useState, useRef, useEffect } from 'react'
import ColorList from './ColorList'
import OnColor from './OnColor'
import Header from './Components/Header'
import './css/Input.css'

const Input = () => {
    const [colors, setColors] = useState([])
    const [onColor, setOnColor] = useState()
    const [hue, setHue] = useState(0)
    const [saturation, setSaturation] = useState(0)
    const [lightness, setLightness] = useState(0)
    const [HSL, setHSL] = useState({ hue, saturation, lightness })

    const pickTextRef = useRef()

    useEffect(()=>{
         if(hue === saturation ===lightness){

         }

     },[hue,saturation,lightness])

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

    const onKeyUp = (event) => {
        const onColorText = event.target.value
        setOnColor(onColorText)
    }

    const handleHChange = (event) => {
        const rangeHue = event.target.value
        setHue(rangeHue)
        // setHSL(HSL.hue=hue)
    }
    const handleSChange = (event) => {
        const rangeSaturation = event.target.value
        setSaturation(rangeSaturation)
        // setHSL(HSL.saturation=saturation)

    }
    const handleLChange = (event) => {
        const rangeLightness = event.target.value
        setLightness(rangeLightness)
        // setHSL(HSL.lightness=lightness)
    }

    const colorObj = {
        background: "#000000",
        height: '20px',
        width: '20px',
        float: 'left'
      };

    // console.log(hue,saturation,lightness)

    return (
        <div>
            <Header></Header>

            <div className='button__container'>
            <button onClick={startDrop} className='button'>search color</button>
            {/* ＜ー他のタブで色を探す */}
            </div>

            カラーコードを入力例FFFFF <br />
            <input type="text" ref={pickTextRef} onKeyUp={onKeyUp} className='textbox'></input>

            <OnColor onColor={onColor} hue={hue} saturation={saturation} lightness={lightness}/>
            {console.log()}
            <br />
            hue:<input type='range' max='360' value={hue} onInput={handleHChange}></input>
            saturation:<input type='range' value={saturation} onInput={handleSChange}></input>
            lightness<input type='range' value={lightness} onInput={handleLChange}></input>

            
            <button onClick={handlePick}>check</button>

            {/* <input type="color" name="" id="" /> */}

            <hr />

            <table>
                <tbody>
                <tr>
                    <td style={colorObj}></td>
                    <td>HEX</td>
                    <td>RGB</td>
                    <td>HSL</td>
                </tr>
                <ColorList colors={colors} />
                </tbody>
            </table>

        </div>
    )
}

export default Input