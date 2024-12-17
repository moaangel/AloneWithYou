import React, { useState } from 'react'

function DiaryDetailComp() {
    const [bookData,setBookData] = useState(
        { title:"일기장", author:"누구",content:["ㅎㅇ","힘들다","좋네"] }
    )

    return (
        <div className="border-2 p-5 w-full h-full mx-auto bg-slate-400">
          <div className='text-center mb-5'>
            <h1 className='mb-2'>{bookData.title}</h1>
            <h3>{bookData.author}</h3>
          </div>
    
          {/* 디자인 구림.. */}
          <div className='flex gap-3 flex-wrap'>
            {bookData.content.map((page, index) => (
              <div key={index} className='w-40 h-52 border-2 rounded p-3 bg-white text-center'>
                <p>{page}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default DiaryDetailComp