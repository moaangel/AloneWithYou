import React from 'react'
import MenuComp from '../components/MenuComp'
import { Route, Routes } from 'react-router-dom'
import DiaryComp from '../components/diary/DiaryComp'
import MapComp from '../components/map/MapComp'
import MainComp from '../components/MainComp'

function MainPage() {
  return (
    <div className='h-screen w-screen'>
            <MenuComp />
            <div className='h-full w-full'>
                <Routes>
                    <Route path="/" element={<MainComp/>} />
                    <Route path="diary" element={<DiaryComp/>} />
                    <Route path="map" element={<MapComp/>} />
                </Routes>
            </div>
    </div>
  )
}

export default MainPage