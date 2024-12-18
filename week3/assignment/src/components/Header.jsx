import React, { useState, useEffect } from 'react';
import { MainHeader } from '../style/header';
import Timer from './Game/Timer';

function Header({ onLevelChange, time, setTime, isRunning, onPageChange }) {
  const [activeButton, setActiveButton] = useState('게임');
  const [level, setLevel] = useState('level 1');

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 0.01);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning, setTime]);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
    if (onLevelChange) {
      onLevelChange(e.target.value);
    }
  };

  const handleButtonClick = (page) => {
    setActiveButton(page);
    onPageChange(page === '게임' ? 'game' : 'ranking'); // 페이지 변경 함수 호출
  };

  return (
    <MainHeader>
      <div className="header__left">
        <h2 className="header__title">1 to 50</h2>
        <button
          className={`header__button ${
            activeButton === '게임' ? 'active' : ''
          }`}
          onClick={() => handleButtonClick('게임')}
        >
          게임
        </button>
        <button
          className={`header__button ${
            activeButton === '랭킹' ? 'active' : ''
          }`}
          onClick={() => handleButtonClick('랭킹')}
        >
          랭킹
        </button>
      </div>
      {activeButton !== '랭킹' && (
        <div className="header__right">
          <select value={level} onChange={handleLevelChange}>
            <option value="level 1">level 1</option>
            <option value="level 2">level 2</option>
            <option value="level 3">level 3</option>
          </select>
          <Timer time={time} />
        </div>
      )}
    </MainHeader>
  );
}

export default Header;
