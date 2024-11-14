import React, { useState } from 'react';
import { MainBackground, InputSection } from '../../styles/title';
import { MypageHeader, HeaderLeft, HeaderRight } from '../../styles/mypage';
import Hobby from '../../component/common/Hobby/Hobby';
import EditProfile from '../../component/common/EditProfile/EditProfile';
import Logout from '../../component/common/Button/Logout';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const [activeTab, setActiveTab] = useState<'hobby' | 'editProfile'>('hobby');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleButtonClick = (tab: 'hobby' | 'editProfile') => {
    setActiveTab(tab);
  };

  return (
    <MainBackground>
      <MypageHeader>
        <HeaderLeft>
          <h3>마이페이지</h3>
          <button
            className="page__btn"
            onClick={() => handleButtonClick('hobby')}
          >
            취미
          </button>
          <button
            className="page__btn"
            onClick={() => handleButtonClick('editProfile')}
          >
            내 정보
          </button>
        </HeaderLeft>
        <HeaderRight>
          <Logout text="로그아웃" onClick={handleLogout} />
        </HeaderRight>
      </MypageHeader>
      <InputSection>
        {activeTab === 'hobby' ? <Hobby /> : <EditProfile />}
      </InputSection>
    </MainBackground>
  );
}

export default MyPage;
