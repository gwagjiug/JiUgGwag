import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../apis/auth/user';

interface FormData {
  username: string;
  password: string;
  passwordConfirm: string;
  hobby: string;
}

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    passwordConfirm: '',
    hobby: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  return {
    step,
    setStep,
    formData,
    setFormData,
    passwordVisible,
    setPasswordVisible,
    navigate,
  };
};
