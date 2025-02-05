import styled from 'styled-components';
import { Theme } from './theme';
export const MypageHeader = styled.header`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  background-color: #9a7e6f;
  z-index: 10;
  padding: 1.2rem;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  color: white;
  .page__btn {
    width: 3.5rem;
    height: 2rem;
    background-color: #9a7e6f;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1rem;
    font-weight: 800;
  }
  .page__btn:hover {
    border-bottom: 1px solid white;
  }
`;

export const HeaderRight = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  color: white;
`;
