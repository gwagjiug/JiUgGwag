import React from 'react';
import Input from '../../component/common/Input/Input';
import Message from '../../component/common/Message/Message';

interface RenderStepParams {
  step: number;
  formData: {
    username: string;
    password: string;
    passwordConfirm: string;
    hobby: string;
  };
  passwordVisible: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: () => void; // 비밀번호 가리기/보이기 토글 함수 추가
}

export const renderStepContent = ({
  step,
  formData,
  passwordVisible,
  handleInputChange,
  togglePasswordVisibility, // 함수 전달
}: RenderStepParams) => {
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
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleInputChange}
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          <Input
            name="passwordConfirm"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="비밀번호를 확인해주세요"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          {formData.password.length > 8 && (
            <Message text="비밀번호는 8자리 이하로 입력해주세요." />
          )}
          {formData.password !== formData.passwordConfirm && (
            <Message text="비밀번호가 일치하지 않습니다" />
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
