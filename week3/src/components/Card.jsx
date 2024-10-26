import styled from "@emotion/styled";
import { useState } from "react";
function Card({ members }) {
  const [count, setCount] = useState(Array(members.length).fill(0));
  const onIncrease = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[index] += 1;
      return newCount;
    });
  };

  return (
    <CardContainer>
      {members.map((member, index) => (
        <CardItem key={member.id} className="card">
          <h2>{member.name}</h2>
          <p>{member.englishName}</p>
          <p>{member.github}</p>
          <div className="LikeSection">
            <p>{count[index]}</p>
            <button className="LikeBtn" onClick={() => onIncrease(index)}>
              Like
            </button>
          </div>
        </CardItem>
      ))}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #888;
  width: 20%;
  padding: 5px;
  margin: 1rem;
  border-radius: 16px;
  .LikeSection {
    display: flex;
    gap: 3px;
    flex-direction: row;
    align-items: center;
  }
  .LikeBtn {
    background-color: black;
    color: white;
    height: 30px;
    border-radius: 16px;
  }
`;

export default Card;
