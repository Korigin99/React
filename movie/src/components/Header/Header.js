// JavaScript 버전 6 문법을 공부 ===> 구글링 : ES6 문법

import React from 'react'
import './Header.css'
import userImg from '../../images/user.png'

const Header = () => {
  // className은 React 문법 - 이걸 JSX라고 함.
  // JSX = JavaScript Syntax Extension
  // 부모 div가 무조건 있어야 함 .(React 문법)
  // class => className (React 문법)

  return (
    <div className="header">
      <div className='logo'>
        기원의 Movie Time
      </div>
      <div className='user-image'>
        <img src={userImg} alt='유저사진'></img>
      </div>
    </div>
  )
}

export default Header