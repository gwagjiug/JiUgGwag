import React from 'react';

const RankItem = ({ rank }) => {
  return (
    <tr key={rank.timestamp}>
      <td>
        {new Date(rank.timestamp).toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </td>
      <td>{rank.level}</td>
      <td>{rank.playTime} 초</td>
    </tr>
  );
};

export default RankItem;
