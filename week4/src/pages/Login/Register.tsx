import React from 'react';
import { MainBackground, InputSection } from '../../styles/title';
import Button from '../../component/common/Button/Button';
import Link from '../../component/common/Link/Link';
import Title from '../../component/common/Title/Title';
import { useRegisterForm } from '../../hooks/register/useRegisterForm';
import {
  handleNextStep,
  handleInputChange,
} from '../../utils/register/registerHandlers';
import { renderStepContent } from '../../utils/register/renderStepContent';

function Register() {
  const { step, setStep, formData, setFormData, passwordVisible, navigate } =
    useRegisterForm();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setFormData);
  };

  const onNextStep = () => {
    handleNextStep({ step, formData, setStep, navigate });
  };

  const isButtonDisabled =
    formData.username.length > 8 ||
    formData.hobby.length > 8 ||
    formData.password.length > 8 ||
    formData.password !== formData.passwordConfirm;

  return (
    <MainBackground>
      <InputSection>
        <Title type="회원가입">
          {renderStepContent({
            step,
            formData,
            passwordVisible,
            handleInputChange: onInputChange,
          })}
          <Button
            text={step === 3 ? '회원가입' : '다음'}
            onClick={onNextStep}
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
