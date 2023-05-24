import React, { useState } from 'react'
import Color from './Color'
const ColorList = ({colors}) => {

  return colors?.map((color)=>(
   
   <td>
    <Color color={color} />
    </td>
  ))
}

export default ColorList