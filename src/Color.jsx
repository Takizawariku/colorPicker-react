import React from 'react'

const Color = ({ color }) => {
  const hex = "#" + color.colorName
  console.log(color)

  // hexからRGBに変換する関数
  const hexToRgb = function (hex) {
    if (hex.slice(0, 1) === "#") hex = hex.slice(1);
    if (hex.length === 3) hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3);

    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (str) {
      return parseInt(str, 16);
    });
  }

  const hexToHsl= function(hex){
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
      throw new Error("Could not parse Hex Color");
    }
  
    const rHex = parseInt(result[1], 16);
    const gHex = parseInt(result[2], 16);
    const bHex = parseInt(result[3], 16);
  
    const r = rHex / 255;
    const g = gHex / 255;
    const b = bHex / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
  
    let h = (max + min) / 2;
    let s = h;
    let l = h;
  
    if (max === min) {
      // Achromatic
      return { h: 0, s: 0, l };
    }
  
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);
  
    return [ h, s, l ];

  }

  // 色の表記をオブジェクト化
  const colorTypes={
    HEX:hex,
    RGB:hexToRgb(hex).join(','),
    HSL:hexToHsl(hex).join(',')
  }
  
  // cssに入れるためのスタイルオブジェクト
  const colorObj = {
    background: hex,
    height: '20px',
    width: '20px',
    float:'left'
  };

  return (
    <div style={{}}>
      <div style={colorObj}> </div>
      HEXcolorCode:{colorTypes.HEX} 
      RGB:{colorTypes.RGB}
      HSl:{colorTypes.HSL}
    </div>
  )
}

export default Color