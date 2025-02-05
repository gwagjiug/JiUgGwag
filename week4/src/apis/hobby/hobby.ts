import axiosInstance from '../axios';

export const fetchUserHobby = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('토큰이 존재하지 않습니다.');
  }

  try {
    const response = await axiosInstance.get('/user/my-hobby', {
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
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};
