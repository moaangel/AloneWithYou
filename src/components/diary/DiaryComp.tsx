import React, { useCallback, useState } from 'react'
import Book from './Book'
import { Box } from '@mui/material'
import CustomModal from '../modal/CustomModal';
import { useNavigate } from 'react-router-dom';

interface book {
  title:String,
  author:String
}

function DiaryComp() {
  const navigate = useNavigate()

  const [isModalOpen,setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [bookData, setBookData] = useState([
    { title:"일기",author:"."},
    { title:"같이쓰기",author:"."},
    { title:"할일목록",author:"."}
  ])
  const openModal = useCallback(() => setIsModalOpen(true),[]);
  const closeModal = useCallback(() => setIsModalOpen(false),[]);
  
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setInputValue(e.target.value);    
  }

  const handleMakeBook = () =>{
    setBookData([...bookData,{title:inputValue,author:"."}]);
    closeModal();
  }

  return (
    <div>
      <div className='absolute bottom-10 right-24'>
        <button className='w-16 h-16 rounded-2xl bg-pink-400 transition hover:bg-pink-600' onClick={openModal}>
          <div className='font-bold text-white text-3xl'>+</div>
        </button>
      </div>
      <div className='p-5 flex gap-4 flex-wrap'>
        {bookData.map((book, index) =>(
          <div key={index} onClick={() => navigate(`/main/diary/${index}`)}>
          <Book title={book.title} author={book.author}/>
          </div>
        ))}
      </div>
      <CustomModal
        isOpen={isModalOpen}
        closeModal={closeModal}
            >
        <Box className="w-full h-full p-10 flex flex-col">
          <input className="w-full h-12 px-3 rounded bg-pink-50 focus:outline-none" placeholder='생성 할 다이어리 주제를 입력해 주세요.' onChange={handleChange}/>
          <div className="flex-grow" />
          <div className="flex justify-end gap-2">
            <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500" onClick={handleMakeBook}>등록</button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={closeModal}>취소</button>
          </div>
        </Box>
      </CustomModal>
    </div>
  )
}

export default DiaryComp