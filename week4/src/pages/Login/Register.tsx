import React, { useState } from 'react';
import { MainBackground, InputSection } from '../../styles/title';
import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../apis/user';

function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    hobby: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input changed:', e.target.value);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextStep = async () => {
    if (step === 3) {
      try {
        const response = await registerUser(formData);
        console.log('회원가입 성공:', response);
        navigate('/');
      } catch (error) {
        console.error(error instanceof Error ? error.message : '에러 발생');
        alert('회원가입에 실패했습니다.');
      }
    } else {
      setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Input
            name="username"
            type="text"
            placeholder="이름을 입력해주세요"
            value={formData.username}
            onChange={handleInputChange}
          />
        );
      case 2:
        return (
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleInputChange}
          />
        );
      case 3:
        return (
          <Input
            name="hobby"
            type="text"
            placeholder="취미를 입력해주세요"
            value={formData.hobby}
            onChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <MainBackground>
      <InputSection>
        <Title type="회원가입">
          {renderStep()}
          <Button
            text={step === 3 ? '회원가입' : '다음'}
            onClick={handleNextStep}
          />
          <Link
            text="이미 회원이신가요? 로그인"
            onClick={() => navigate('/')}
          />
        </Title>
      </InputSection>
    </MainBackground>
  );
}

export default Register;
