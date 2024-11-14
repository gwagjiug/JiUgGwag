import React from 'react';
import { InputSection, MainBackground } from '../../styles/title';
import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';
import { useLogin } from '../../hooks/login/useLogin';

function Login() {
  const { formData, handleInputChange, handleLogin, handleLinkClick } =
    useLogin();

  return (
    <MainBackground>
      <InputSection>
        <Title type="로그인">
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button text="로그인" hoverColor="#608BC1" onClick={handleLogin} />
          <Link text="회원가입" onClick={handleLinkClick} />
        </Title>
      </InputSection>
    </MainBackground>
  );
}

export default Login;
