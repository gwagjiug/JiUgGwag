import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../apis/auth/login';
import { LoginSuccessResponse } from '../../types/types';
import axios from 'axios';

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
      navigate('/mypage');
    } catch (error: unknown) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorCode = error.response?.data?.code;
      switch (status) {
        case 400:
          if (errorCode === '01') {
            alert('요청 형식이 올바르지 않습니다.');
          } else if (errorCode === '02') {
            alert('로그인 요청 정보가 올바르지 않습니다.');
          } else {
            alert('잘못된 요청입니다.');
          }
          break;

        case 403:
          if (errorCode === '01') {
            alert('비밀번호가 틀렸습니다.');
          } else {
            alert('접근이 거부되었습니다.');
          }
          break;

        case 404:
          if (errorCode === '00') {
            alert('잘못된 접근입니다. 요청 경로를 확인해주세요.');
          } else {
            alert('요청하신 페이지를 찾을 수 없습니다.');
          }
          break;

        default:
          if (error.response) {
            alert(`서버 오류가 발생했습니다. (${status})`);
          } else if (error.request) {
            alert(
              '서버와의 통신에 실패했습니다. 네트워크 상태를 확인해주세요.'
            );
          } else {
            alert('요청 처리 중 오류가 발생했습니다.');
          }
      }
    } else {
      console.log('Unknown Error:', error);
      alert('예상치 못한 오류가 발생했습니다.');
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
