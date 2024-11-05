import styled, { css } from 'styled-components';

const colors = {
  background: '#ec8305',
  titleColor: 'white',
  buttonBackground: '#0b192c',
  buttonHover: '#024caa',
  blinkColor: '#d4f6ff',
  buttonTextColor: 'white',
};

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
`;

export const MainTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 10rem;
    color: ${colors.titleColor};
  }
`;

export const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .grid__section {
    display: grid;
    grid-template-columns: repeat(${(props) => props.gridColumns}, 1fr);
    gap: 0.8rem;
    justify-items: center;
    height: auto;
  }

  .grid__button {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    background-color: ${colors.buttonBackground};
    color: ${colors.buttonTextColor};
    font-size: 1.5rem;
    transition: transform 0.1s ease;

    &:hover {
      background-color: ${colors.buttonHover};
    }
  }

  @keyframes blink {
    0%,
    50%,
    100% {
      background-color: ${colors.blinkColor};
    }
  }

  .grid__button.clicked {
    animation: blink 0.1s ease;
    transform: scale(1);
  }
`;
