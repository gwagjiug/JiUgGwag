import { useState } from 'react';
import React from 'react';
import Header from '../components/Header';
import Game from '../pages/Game';
import Modal from '../components/Game/Modal';
import Ranking from '../pages/Ranking';
function Main() {
  const [level, setLevel] = useState('level 1');
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('game');

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setTime(0);
    setIsRunning(false);
  };

  const handleGameStart = () => {
    setIsRunning(true);
  };

  const handleGameEnd = () => {
    setIsRunning(false);

    const gameRecord = {
      timestamp: new Date().toISOString(),
      level: level,
      playTime: time.toFixed(2),
    };

    const records = JSON.parse(localStorage.getItem('gameRecords') || '[]');
    records.push(gameRecord);
    localStorage.setItem('gameRecords', JSON.stringify(records));

    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    handleGameReset();
  };

  const handleGameReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    if (page === 'game') {
      handleGameReset();
    }
  };

  return (
    <>
      <Header
        onLevelChange={handleLevelChange}
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        onPageChange={handlePageChange}
      />
      {activePage === 'game' && (
        <>
          <Game level={level} onStart={handleGameStart} onEnd={handleGameEnd} />
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <h2>게임 종료!</h2>
            <p>걸린 시간: {time.toFixed(2)}초</p>
          </Modal>
        </>
      )}
      {activePage === 'ranking' && <Ranking />}
    </>
  );
}

export default Main;
