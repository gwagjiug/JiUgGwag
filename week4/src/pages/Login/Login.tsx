// Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputSection, MainBackground } from '../../styles/title';
import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';

function Login() {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate('/register');
  };

  return (
    <MainBackground>
      <InputSection>
        <Title type="로그인">
          <Input type="text" placeholder="아이디를 입력하세요" name="userId" />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
          />
          <Button text="로그인" />
          <Link text="회원가입" onClick={handleLinkClick} />
        </Title>
      </InputSection>
    </MainBackground>
  );
}

export default Login;
