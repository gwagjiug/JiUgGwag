import React, { useState, useEffect } from 'react';
import { CenteredMainContainer, RankSection } from '../style/ranking';
import RankHeader from '../components/Ranking/RankHeader';
import RankTable from '../components/Ranking/RankTable';

function Ranking() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    loadRankings();
  }, []);

  const loadRankings = () => {
    try {
      const storedRankings = localStorage.getItem('gameRecords');
      if (storedRankings) {
        const parsedRankings = JSON.parse(storedRankings);
        const sortedRankings = parsedRankings.sort((a, b) => {
          const levelA = parseInt(a.level.split(' ')[1]);
          const levelB = parseInt(b.level.split(' ')[1]);

          if (levelB !== levelA) {
            return levelB - levelA;
          }
          return parseFloat(a.playTime) - parseFloat(b.playTime);
        });
        setRankings(sortedRankings);
      }
    } catch (error) {
      console.error('로딩 에러(로컬 스토리지 못불러옴)', error);
    }
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('gameRecords');
      setRankings([]);
    } catch (error) {
      console.error('초기화 에러', error);
    }
  };

  return (
    <CenteredMainContainer>
      <RankSection>
        <RankHeader onReset={handleReset} />
        <RankTable rankings={rankings} />
      </RankSection>
    </CenteredMainContainer>
  );
}

export default Ranking;
