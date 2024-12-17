import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

function MenuComp() {
    const navigate = useNavigate();

    const handleNavigate = useCallback((path : string) => {
        navigate(path);
      },[]);

  return (
    <header
      className={"bg-pink-400 left-0 right-0 transition-all duration-300 relative"}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between py-5 text-white'>
          <img src={logo} className='w-8 cursor-pointer' onClick={()=>handleNavigate('/main')}></img>
          <nav className='flex gap-5'>
            <button onClick={()=>handleNavigate('/main')}>홈</button>
            <button onClick={()=>handleNavigate('/main/diary')}>다이어리</button>
            <button onClick={()=>handleNavigate('/main/map')}>추억의장소</button>
            <button onClick={()=>handleNavigate('/main/chat')}>대화하기</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MenuComp
