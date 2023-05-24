import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'
import Header from '../Components/Header'

const HowToUse = () => {
  return (
    <div>
      <Header></Header>

      <h3>このサイトの使いかた</h3>
      <h4>・「serch color」ボタン</h4>
      <p>ボタンをクリックすることで「虫眼鏡」みたいな物が出てきます</p>

      <h4>・テキストボックス</h4>
      <p>テキストボックスにカラーコードがリアルタイムでが分かります。<br/>
        HEXコードの＃を抜いて入力してください。例)ff00ff　など　<br/>
        「check」ボタンを押すと「色,HEX,RGB,HSL」変換されたものが出てきます。</p>

        <h4>・HSLバー（実装中）</h4>
      <p>
        ・H Hue=色相(0~360)　<br/>
        ・S Saturation彩度(0~100) <br/>
        ・L Lightness輝度(0~100) <br/>
        からなる色の表現方法です。
      </p>
    </div>
  )
}

export default HowToUse