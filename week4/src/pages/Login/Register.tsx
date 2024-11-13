import React from 'react';
import { MainBackground, InputSection } from '../../styles/title';
import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate('/');
  };
  return (
    <MainBackground>
      <InputSection>
        <Title type="회원가입">
          <Input type="text" placeholder="이름을 입력해주세요" />
          <Button text="다음" />
          <Link text="이미 회원이신가요? 로그인" onClick={handleLinkClick} />
        </Title>
      </InputSection>
    </MainBackground>
  );
}

export default Register;
