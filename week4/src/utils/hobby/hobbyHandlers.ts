import { searchHobby } from '../../apis/hobby/searchHobby';

interface SearchHobbyParams {
  userInput: string;
  setIsSearching: (value: boolean) => void;
  setSearchMessage: (value: string) => void;
}

export const handleSearchClick = async ({
  userInput,
  setIsSearching,
  setSearchMessage,
}: SearchHobbyParams) => {
  if (!userInput) {
    setSearchMessage('사용자 번호를 입력하세요.');
    return;
  }

  setIsSearching(true);
  setSearchMessage('');

  try {
    const fetchedHobby = await searchHobby(userInput);
    if (!fetchedHobby) {
      alert('해당 유저를 찾을 수 없습니다.');
      setSearchMessage('');
    } else {
      setSearchMessage(`${userInput}번 유저의 취미는 ${fetchedHobby}입니다.`);
    }
  } catch (err) {
    alert('유저를 찾을 수 없습니다.');
    setSearchMessage('');
  } finally {
    setIsSearching(false);
  }
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUserInput: (value: string) => void
) => {
  setUserInput(e.target.value);
};
