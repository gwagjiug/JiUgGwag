import React from 'react';
import { MainBackground, InputSection } from '../../styles/title';
import { MypageHeader } from '../../styles/mypage';
import Title from '../../component/common/Title/Title';
import Hobby from '../../component/common/Hobby/Hobby';
function MyPage() {
  return (
    <MainBackground>
      <MypageHeader>
        <div>
          <h3>마이페이지</h3>
          <button>취미</button>
          <button>내 정보</button>
        </div>
      </MypageHeader>
      <InputSection>
        <Title type="취미">
          <Hobby />
        </Title>
      </InputSection>
    </MainBackground>
  );
}

export default MyPage;
