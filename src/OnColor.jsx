import React from 'react'

const OnColor = ({onColor,hue,saturation,lightness}) => {

    // const [backgroundColor,setbackgroundColor]=useState()
    // setbackgroundColor()

    const onColorObj ={
        border:'solid black midiun',
        background:"#"+ onColor,
        width:'70px',
        height:'70px',
        margin:'0 auto',
    }
    // latestColor=onColor
  return (
    <div style={onColorObj}>

    </div>
  )
}

export default OnColor