import styled from 'styled-components';
import { MainContainer } from './game';

export const CenteredMainContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RankSection = styled.div`
  position: relative;
  padding: 1rem;
  background-color: white;
  width: 50rem;
  margin: 2rem;
  max-height: 60vh;
  overflow-y: auto;
`;

export const RankingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    flex-grow: 1;
    text-align: center;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: #dbd3d3;
    color: black;
    text-align: center;
    padding: 1rem;
    border-bottom: 2px solid #f0f0f0;
  }

  th:nth-child(1) {
    width: 60%;
  }

  th:nth-child(2),
  th:nth-child(3) {
    width: 20%;
  }

  td {
    padding: 1rem;
    border: 1px solid #f0f0f0;
    text-align: center;
  }
`;
