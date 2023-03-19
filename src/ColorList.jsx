import React, { useState } from 'react'
import Color from './Color'
const ColorList = ({colors}) => {

  return colors?.map((color)=>(
    <Color color={color} />
  ))
}

export default ColorList