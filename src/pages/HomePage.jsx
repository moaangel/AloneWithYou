import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage({ setCurrentPage }) { // app에서와 마찬가지로 fade-in,out 클래스 태그로 애니메이션 관리
  const [fadeState, setFadeState] = useState('fade-in'); // 초기 상태

  // 페이지에 진입할 때 페이드인 효과를 적용
  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setFadeState('fade-in');
    }, 100); 

    return () => clearTimeout(fadeInTimer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  const scrollNextPage = () => {
    setFadeState('fade-out'); // 페이지 이동 시 페이드 아웃

    setTimeout(() => {
      setCurrentPage(1); 
    }, 500); 
  };

  return (
    <div className={`h-screen w-screen relative z-50 flex box overflow-x-hidden bg-main ${fadeState}`}>
      <div className="h-full w-full absolute top-0 left-0"></div>
      <div>
        <div className="absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-6xl text-white w-full h-1/4 my-auto text-center flex justify-center items-center slide-in-left">
            Alone with you,
          </p>
          <p className="text-6xl text-pink-100 w-full h-1/4 my-auto text-center flex justify-center items-center slide-in-right mb-32">
            함께 하는 추억 쌓기
          </p>
          <button
            className="text-2xl text-white w-1/4 md:w-1/5 h-1/6 mx-auto my-auto text-center flex justify-center items-center border-2 rounded-xl transition-all duration-300 hover:bg-pink-400"
            onClick={scrollNextPage}
          >
            입장하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
