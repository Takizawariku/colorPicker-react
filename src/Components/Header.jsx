import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Header.css"
const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>colorPicker</h1>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <Link to={'/'} className='header_title'>ホーム</Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to={'/HowToUse'}>使用方法</Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to={'/UpdateHistory'}>更新履歴</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header