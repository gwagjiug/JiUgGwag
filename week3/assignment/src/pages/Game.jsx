import React, { useState, useEffect } from 'react';
import { MainTitle, MainContainer, GameContainer } from '../style/game';

function getRandomNumber(min, max, exclude) {
  let number;
  do {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (exclude && exclude.includes(number));
  return number;
}

function Game({ level, onStart, onEnd }) {
  const getGridConfig = () => {
    switch (level) {
      case 'level 1':
        return { columns: 3, maxNumber: 18 };
      case 'level 2':
        return { columns: 4, maxNumber: 32 };
      case 'level 3':
        return { columns: 5, maxNumber: 50 };
      default:
        return { columns: 3, maxNumber: 18 };
    }
  };

  const { columns: gridColumns, maxNumber } = getGridConfig();
  const buttonCount = gridColumns * gridColumns;
  const halfMaxNumber = Math.ceil(maxNumber / 2);

  const [displayNumbers, setDisplayNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const initializeGame = () => {
    const initialNumbers = new Array(buttonCount).fill(null);
    const usedNumbers = [];

    for (let i = 0; i < halfMaxNumber; i++) {
      const number = getRandomNumber(1, halfMaxNumber, usedNumbers);
      usedNumbers.push(number);

      let position;
      do {
        position = Math.floor(Math.random() * buttonCount);
      } while (initialNumbers[position] !== null);

      initialNumbers[position] = number;
    }

    setDisplayNumbers(initialNumbers);
    setIsPhaseTwo(false);
  };

  useEffect(() => {
    initializeGame();
    setCurrentNumber(1);
  }, [level]);

  const handleButtonClick = (index) => {
    const clickedNumber = displayNumbers[index];

    if (clickedNumber === currentNumber) {
      if (currentNumber === 1) {
        onStart();
      }

      const newDisplayNumbers = [...displayNumbers];
      setClickedIndex(index);

      if (!isPhaseTwo) {
        const newNumber = getRandomNumber(
          halfMaxNumber + 1,
          maxNumber,
          newDisplayNumbers.filter((n) => n !== null && n > halfMaxNumber)
        );
        newDisplayNumbers[index] = newNumber;

        if (currentNumber === halfMaxNumber) {
          setIsPhaseTwo(true);
        }
      } else {
        newDisplayNumbers[index] = null;
      }

      setDisplayNumbers(newDisplayNumbers);

      if (currentNumber === maxNumber) {
        onEnd();
        initializeGame();
        setCurrentNumber(1);
      } else {
        setCurrentNumber((prev) => prev + 1);
      }

      setTimeout(() => setClickedIndex(null), 200);
    }
  };

  return (
    <MainContainer>
      <MainTitle>
        <h1>다음 숫자: {currentNumber}</h1>
      </MainTitle>
      <GameContainer gridColumns={gridColumns}>
        <div className="grid__section">
          {displayNumbers.map((number, index) => (
            <button
              key={index}
              className={`grid__button ${
                index === clickedIndex ? 'clicked' : ''
              }`}
              onClick={() => handleButtonClick(index)}
              style={{ visibility: number !== null ? 'visible' : 'hidden' }}
            >
              {number}
            </button>
          ))}
        </div>
      </GameContainer>
    </MainContainer>
  );
}

export default Game;
