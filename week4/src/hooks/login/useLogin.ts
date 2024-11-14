import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../apis/auth/login';
import { LoginSuccessResponse } from '../../types/types';

interface LoginRequest {
  username: string;
  password: string;
}

interface UseLoginReturn {
  formData: LoginRequest;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => Promise<void>;
  handleLinkClick: () => void;
}

export const useLogin = (): UseLoginReturn => {
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
      localStorage.setItem('authToken', response.result.token);
      await navigate('/mypage');
    } catch (error: unknown) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error: unknown) => {
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
  };

  const handleLinkClick = () => {
    navigate('/register');
  };

  return {
    formData,
    handleInputChange,
    handleLogin,
    handleLinkClick,
  };
};
