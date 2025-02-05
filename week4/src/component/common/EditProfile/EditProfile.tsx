import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styled from 'styled-components';
import Title from '../Title/Title';
import { editProfile } from '../../../apis/edit/editProfile';

function EditProfile() {
  const [password, setPassword] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!hobby && !password) {
      alert('취미 또는 비밀번호 중 하나는 반드시 입력해야 합니다.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (password.trim() === '' && hobby.trim() === '') {
        alert('취미 또는 비밀번호 중 하나는 반드시 입력해야 합니다.');
        return;
      }

      if (password.trim() !== '' && hobby.trim() !== '') {
        await editProfile(password, hobby);
      } else if (password.trim() !== '') {
        await editProfile(password, '');
      } else {
        await editProfile('', hobby);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류 발생');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Title type="내 정보 수정하기">
      <EditSection>
        <EditDiv>
          <span>새 비밀번호</span>
          <Input
            name="password"
            type="password"
            placeholder="새 비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </EditDiv>
        <EditDiv>
          <span>새 취미</span>
          <Input
            name="hobby"
            type="text"
            placeholder="새 취미를 입력하세요"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </EditDiv>

        <Button
          text={loading ? '수정 중...' : '수정하기'}
          onClick={handleSubmit}
        />
      </EditSection>
    </Title>
  );
}

const EditSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EditDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 800;
  font-size: 1rem;
  gap: 1rem;
`;

export default EditProfile;
