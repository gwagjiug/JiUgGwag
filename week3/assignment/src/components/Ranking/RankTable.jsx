import React from 'react';
import RankItem from './RankItem';
import { RankingTable } from '../../style/ranking';

const RankTable = ({ rankings }) => {
  return (
    <RankingTable>
      <thead>
        <tr>
          <th>타임스탬프</th>
          <th>레벨</th>
          <th>플레이 시간</th>
        </tr>
      </thead>
      <tbody>
        {rankings.length === 0 ? (
          <tr>
            <td colSpan="3" style={{ textAlign: 'center' }}>
              기록이 없습니다
            </td>
          </tr>
        ) : (
          rankings.map((rank) => <RankItem key={rank.timestamp} rank={rank} />)
        )}
      </tbody>
    </RankingTable>
  );
};

export default RankTable;
