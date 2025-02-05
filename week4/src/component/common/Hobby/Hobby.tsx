import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styled from 'styled-components';
import Message from '../Message/Message';
import { useHobbyData } from '../../../hooks/hobby/useHobbyData';
import {
  handleSearchClick,
  handleInputChange,
} from '../../../utils/hobby/hobbyHandlers';
import Title from '../Title/Title';

function Hobby() {
  const { myHobby, error } = useHobbyData();
  const [userInput, setUserInput] = useState<string>('');
  const [searchMessage, setSearchMessage] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setUserInput);
  };

  const onSearchClick = () => {
    handleSearchClick({ userInput, setIsSearching, setSearchMessage });
  };

  return (
    <Title type="취미">
      <HobbySection>
        <HobbyDiv>
          <span>나의 취미</span>
        </HobbyDiv>
        <HobbyDiv>
          <p>{myHobby || error}</p>
        </HobbyDiv>
        <HobbyDiv>
          <span>다른 사람들의 취미</span>
        </HobbyDiv>
        <Input
          type="text"
          placeholder="사용자 번호를 입력하세요"
          name="userNo"
          value={userInput}
          onChange={onInputChange}
        />
        <Button
          text={isSearching ? '검색 중...' : '검색'}
          onClick={onSearchClick}
          disabled={isSearching}
        />
        {searchMessage && (
          <HobbyDiv>
            <Message text={searchMessage} />
          </HobbyDiv>
        )}
      </HobbySection>
    </Title>
  );
}

const HobbySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HobbyDiv = styled.div`
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 1rem;
`;

export default Hobby;
