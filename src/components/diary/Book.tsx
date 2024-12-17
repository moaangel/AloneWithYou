import React, { useCallback } from 'react';
import './Book.css'; 
import { useNavigate } from 'react-router-dom';

interface BookProps {
  title: string;
  author: string;
}

const BookComp: React.FC<BookProps> = ({ title, author }) => {
  const navigate = useNavigate()


  return (
    <div className="book">
      <div className="book-cover">
        <div className='w-6/7 h-7 bg-pink-50 flex mx-auto rounded leading-relaxed px-1'>
          <h1>{title}</h1>
        </div>
        <div className='w-6/7 mx-auto'>
          <p>{author}</p>
        </div>
      </div>
      <div className="book-spine" />
    </div>
  );
};

export default BookComp;
