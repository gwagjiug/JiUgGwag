// Header.js
import React, { useState, useEffect } from 'react';
import { MainHeader } from '../style/header';
import Timer from './Timer'; // Timer 컴포넌트 import

function Header() {
  const [activeButton, setActiveButton] = useState('게임');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 0.01);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <MainHeader>
      <div className="header__left">
        <h2 className="header__title">1 to 50</h2>
        <button
          className={`header__button ${
            activeButton === '게임' ? 'active' : ''
          }`}
          onClick={() => setActiveButton('게임')}
        >
          게임
        </button>
        <button
          className={`header__button ${
            activeButton === '랭킹' ? 'active' : ''
          }`}
          onClick={() => setActiveButton('랭킹')}
        >
          랭킹
        </button>
      </div>
      {activeButton !== '랭킹' && (
        <div className="header__right">
          <select>
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
