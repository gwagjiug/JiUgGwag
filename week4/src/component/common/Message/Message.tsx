import React from 'react';
import styled from 'styled-components';
interface MessageProps {
  text: string;
}

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: red;
`;

const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <MessageContainer>
      <p>{text}</p>
    </MessageContainer>
  );
};

export default Message;
