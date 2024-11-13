import styled from 'styled-components';
import { Theme } from './theme';

export const InputSection = styled.div`
  width: 100%;
  height: 50rem;
  background-color: ${Theme.color.inputBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input__title {
    margin-bottom: 1rem;
  }
`;

export const MainBackground = styled.div`
  background-color: ${Theme.color.backgroundColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
`;
