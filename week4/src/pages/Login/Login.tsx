import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputSection, MainBackground } from '../../styles/title';
import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';
import { loginUser } from '../../apis/auth/login';
import { LoginSuccessResponse } from '../../types/types';

interface LoginRequest {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginRequest>({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const { username, password } = formData;

    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response: LoginSuccessResponse = await loginUser({
        username,
        password,
      });
      console.log('로그인 성공:', response);
      localStorage.setItem('authToken', response.result.token);
      await navigate('/mypage');
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        const errorData = error as { code: string; message?: string };
        if (errorData.code === '00') {
          alert('잘못된 요청입니다.');
        } else if (errorData.message === '비밀번호가 틀렸습니다.') {
          alert('비밀번호가 틀렸습니다.');
        } else {
          alert(errorData.message || '로그인에 실패했습니다.');
        }
      }
    }
  };

  const handleLinkClick = () => {
    navigate('/register');
  };

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
