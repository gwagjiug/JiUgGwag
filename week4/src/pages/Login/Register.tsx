import React, { useState } from 'react';
import { MainBackground, InputSection } from '../../styles/title';
import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../apis/auth/user';
import Message from '../../component/common/Message/Message';

function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    hobby: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextStep = async () => {
    if (step === 1) {
      if (!formData.username.trim()) {
        alert('아이디를 입력해주세요.');
        return;
      }
      if (formData.username.length > 8) {
        alert('아이디는 8자리 이하로 입력해주세요');
        return;
      }
      setStep((prevStep) => prevStep + 1);
    } else if (step === 2) {
      if (formData.password.length < 8) {
        alert('비밀번호는 8자 이상이어야 합니다.');
        return;
      }

      if (formData.password !== formData.passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      setStep((prevStep) => prevStep + 1);
    } else if (step === 3) {
      try {
        const response = await registerUser(formData);
        console.log('회원가입 성공:', response);
        navigate('/');
      } catch (error) {
        console.error(error instanceof Error ? error.message : '에러 발생');
        alert('회원가입에 실패했습니다.');
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Input
              name="username"
              type="text"
              placeholder="아이디를 입력해주세요"
              value={formData.username}
              onChange={handleInputChange}
            />
            {formData.username.length > 8 && (
              <Message text="아이디는 8자리 이하로 입력해주세요." />
            )}
          </>
        );
      case 2:
        return (
          <>
            <Input
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Input
              name="passwordConfirm"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="비밀번호를 확인해주세요"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
            />
            {formData.password.length > 8 && (
              <Message text="비밀번호를 8자리 이하로 입력해주세요." />
            )}
          </>
        );
      case 3:
        return (
          <>
            <Input
              name="hobby"
              type="text"
              placeholder="취미를 입력해주세요"
              value={formData.hobby}
              onChange={handleInputChange}
            />
            {formData.hobby.length > 8 && (
              <Message text="취미는 8자리 이하로 입력해주세요." />
            )}
          </>
        );
      default:
        return null;
    }
  };

  const isButtonDisabled =
    formData.username.length > 8 || formData.hobby.length > 8;

  return (
    <MainBackground>
      <InputSection>
        <Title type="회원가입">
          {renderStep()}
          <Button
            text={step === 3 ? '회원가입' : '다음'}
            onClick={handleNextStep}
            disabled={isButtonDisabled}
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
