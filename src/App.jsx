import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const totalPages = 2; // 페이지 수
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScroll = (direction) => {
    if (isTransitioning || (direction === 'next' && currentPage >= totalPages - 1) || (direction === 'prev' && currentPage <= 0)) {
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next' && currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setIsTransitioning(false);
    }, 500); 
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        handleScroll('next');
      } else {
        handleScroll('prev');
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage, isTransitioning]);

  //클래스 태그로 페이드인 페이드아웃을 지정하여 애니메이션을 관리 함
  return (
    <Router>
    <div className="overflow-hidden">
      <div className={`app-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {currentPage === 0 && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 1 && <MainPage />}
      </div>
    </div>
    </Router>
  );
}

export default App;
