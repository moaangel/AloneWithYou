import React, { useState } from 'react'
import Book from './Book'
import { Box, Typography } from '@mui/material'
import CustomModal from '../modal/CustomModal';


function DiaryComp() {
  const [isModalOpen,setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className='absolute bottom-10 right-24'>
        <button className='w-16 h-16 rounded-2xl bg-pink-400 transition hover:bg-pink-600' onClick={openModal}>
          <div className='font-bold text-white text-3xl'>+</div>
        </button>
      </div>
      <div className='p-5 flex gap-3'>
        <Book title={'일기'} author={'ㅇㅇ'}/>
        <Book title={'같이쓰기'} author={'ㅇㅇ'} />
        <Book title={'할일목록'} author={'ㅇㅇ'} />
      </div>
      <CustomModal
        isOpen={isModalOpen}
        closeModal={closeModal}
            >
        <Box className="w-full h-full p-10 flex flex-col">
          <input className="w-full h-12 px-3 rounded bg-pink-50 focus:outline-none" />
          <div className="flex-grow" />
          <div className="flex justify-end gap-2">
            <button className="bg-red-400 text-white px-4 py-2 rounded">등록</button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded">취소</button>
          </div>
        </Box>
      </CustomModal>
    </>
  )
}

export default DiaryComp