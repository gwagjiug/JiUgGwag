import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styled from 'styled-components';
import { fetchUserHobby } from '../../../apis/hobby/hobby';

function Hobby() {
  const [userToken, setUserToken] = useState('');
  const [hobby, setHobby] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('authToken');
    if (tokenFromLocalStorage) {
      setUserToken(tokenFromLocalStorage);
    }
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  useEffect(() => {
    if (userToken) {
      const fetchHobbyOnLoad = async () => {
        setLoading(true);
        setError(null);
        try {
          const fetchedHobby = await fetchUserHobby();
          setHobby(fetchedHobby);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : '알 수 없는 오류가 발생했습니다.'
          );
        } finally {
          setLoading(false);
        }
      };

      fetchHobbyOnLoad();
    }
  }, [userToken]);

  return (
    <HobbySection>
      <HobbyDiv>
        <span>나의 취미</span>
      </HobbyDiv>
      <HobbyDiv>
        <p>{loading ? '로딩 중...' : hobby || error}</p>{' '}
      </HobbyDiv>
      <HobbyDiv>
        <span>다른 사람들의 취미</span>
      </HobbyDiv>
      <Input type="text" placeholder="사용자번호" name="userToken" />
      <Button text="검색" />
    </HobbySection>
  );
}

const HobbySection = styled.section`
  display: flex;
  flex-direction: column;
`;

const HobbyDiv = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 1rem;
`;

export default Hobby;
