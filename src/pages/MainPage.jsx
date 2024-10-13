import React from 'react'
import MenuComp from '../components/MenuComp'
import { Route, Routes } from 'react-router-dom'
import DiaryComp from '../components/diary/DiaryComp'
import MapComp from '../components/map/MapComp'

function MainPage() {
  return (
    <div className='h-screen w-screen'>
            <MenuComp />
            <div className='h-5/6 w-5/6 text-center py-20 mx-auto mb-28'>
                <Routes>
                    <Route path="diary" element={<DiaryComp/>} />
                    <Route path="map" element={<MapComp/>} />
                </Routes>
            </div>
    </div>
  )
}

export default MainPage