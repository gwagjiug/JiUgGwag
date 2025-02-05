import axiosInstance from '../axios';

export const searchHobby = async (userNo: string) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('유저 토큰 값이 없습니다.');
  }
  try {
    const response = await axiosInstance.get(`/user/${userNo}/hobby`, {
      headers: {
        token: token,
      },
    });

    if (response.data.code === '00') {
      throw new Error('취미를 불러오는 데 실패했습니다.');
    }
    return response.data.result.hobby;
  } catch (error) {
    console.error(error);
  }
};
