import { useState } from 'react';
import React from 'react';
import Header from '../components/Header';
import Game from './Game';
function Main() {
  const [level, setLevel] = useState('level 1'); // 레벨 상태 관리

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };
  return (
    <>
      <Header onLevelChange={handleLevelChange} />
      <Game level={level} />
    </>
  );
}

export default Main;
