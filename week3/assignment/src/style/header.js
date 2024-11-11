import styled from 'styled-components';

export const MainHeader = styled.header`
  padding: 1rem;
  width: 100%;
  height: 5rem;
  background-color: #0b192c;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;

  .header__title {
    color: white;
  }

  .header__left {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .header__button {
    width: 4rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    background-color: #0b192c;
    color: white;

    &.active {
      background-color: #ff6500;
    }
  }

  .header__right {
    gap: 1rem;
    padding: 2rem;
    display: flex;
    align-items: center;
  }
  .header__timer {
    color: white;
  }
  .header__select {
    width: 5rem;
    border-radius: 0.5rem;
  }
`;
