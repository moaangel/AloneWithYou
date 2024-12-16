import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() { 
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/main'); 
  };

  return (
    <div className={`h-screen w-screen relative z-50 flex box overflow-x-hidden bg-main`}>
      <div className="h-full w-full absolute top-0 left-0"></div>
      <div>
        <div className="absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-6xl text-white w-full h-1/4 my-auto text-center flex justify-center items-center slide-in-left">
            Alone with you,
          </p>
          <p className="text-6xl text-pink-100 w-full h-1/4 my-auto text-center flex justify-center items-center slide-in-right mb-32">
          Write our own story together
          </p>
          <button
            className="text-2xl text-white w-1/4 md:w-1/5 h-1/6 mx-auto my-auto text-center flex justify-center items-center border-2 rounded-xl transition-all duration-300 hover:bg-pink-400"
            onClick={handleNavigate}
          >
            입장하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
