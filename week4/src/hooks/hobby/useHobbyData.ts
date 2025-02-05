import { useState, useEffect } from 'react';
import { fetchUserHobby } from '../../apis/hobby/hobby';

export const useHobbyData = () => {
  const [myHobby, setMyHobby] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHobbyOnLoad();
  }, []);

  const fetchHobbyOnLoad = async () => {
    try {
      const fetchedHobby = await fetchUserHobby();
      setMyHobby(fetchedHobby);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.'
      );
    }
  };

  return { myHobby, error };
};
