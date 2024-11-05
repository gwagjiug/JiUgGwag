import React from 'react';
import { RankingHeader } from '../../style/ranking';

const RankHeader = ({ onReset }) => {
  return (
    <RankingHeader>
      <h1>랭킹</h1>
      <button onClick={onReset}>초기화</button>
    </RankingHeader>
  );
};

export default RankHeader;
