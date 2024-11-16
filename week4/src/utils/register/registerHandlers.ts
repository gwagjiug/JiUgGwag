import { registerUser } from '../../apis/auth/user';
interface FormData {
  username: string;
  password: string;
  passwordConfirm: string;
  hobby: string;
}

interface HandleNextStepParams {
  step: number;
  formData: FormData;
  setStep: (value: React.SetStateAction<number>) => void;
  navigate: (path: string) => void;
}

export const handleNextStep = async ({
  step,
  formData,
  setStep,
  navigate,
}: HandleNextStepParams) => {
  if (step === 1) {
    setStep((prevStep) => prevStep + 1);
  } else if (step === 2) {
    setStep((prevStep) => prevStep + 1);
  } else if (step === 3) {
    try {
      const response = await registerUser(formData);

      navigate('/');
    } catch (error) {
      console.error(error instanceof Error ? error.message : '에러 발생');
      alert('회원가입에 실패했습니다.');
    }
  }
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
