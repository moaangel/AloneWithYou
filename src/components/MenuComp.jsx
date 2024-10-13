import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function MenuComp() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
      };

  return (
    <header
      className={"bg-pink-400 left-0 right-0 transition-all duration-300 relative"}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between py-5 text-white'>
          <h1>Alone With You</h1>
          <nav className='flex gap-4'>
            <button onClick={()=>handleNavigate('/main')}>홈</button>
            <button onClick={()=>handleNavigate('/main/diary')}>다이어리</button>
            <button onClick={()=>handleNavigate('/main/map')}>추억찾기</button>
            <button>대충버튼</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MenuComp
