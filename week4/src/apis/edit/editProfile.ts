import axios from 'axios';
import axiosInstance from '../axios';

export interface ErrorResponse {
  code: string;
}

export const editProfile = async (
  password: string,
  hobby: string
): Promise<void> => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axiosInstance.put(
      '/user',
      { password, hobby },
      {
        headers: {
          token: token,
        },
      }
    );

    if (response.data.code === '00') {
      throw new Error('업데이트에 실패했습니다.');
    } else {
      alert('프로필이 성공적으로 업데이트 되었습니다.');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as ErrorResponse;
      throw new Error(`Error: ${errorData?.code || '알 수 없는 오류'}`);
    }
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};
