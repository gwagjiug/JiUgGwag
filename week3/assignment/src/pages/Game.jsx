// Game.js
import React from 'react';
import { MainTitle, MainContainer } from '../style/game';

function Game({ level }) {
  const getButtonCount = () => {
    switch (level) {
      case 'level 1':
        return 3 * 3; // 3x3 버튼
      case 'level 2':
        return 4 * 4; // 4x4 버튼
      case 'level 3':
        return 5 * 5; // 5x5 버튼
      default:
        return 0;
    }
  };

  const buttonCount = getButtonCount();

  return (
    <MainContainer>
      <MainTitle>
        <h1>다음 숫자</h1>
      </MainTitle>
      <div className="button-grid">
        {Array.from({ length: buttonCount }, (_, index) => (
          <button key={index} className="grid-button">
            {index + 1}
          </button>
        ))}
      </div>
    </MainContainer>
  );
}

export default Game;
