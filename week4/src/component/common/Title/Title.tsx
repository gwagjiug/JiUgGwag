import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  type: string;
  children: React.ReactNode;
}

function Title({ type, children }: TitleProps) {
  return (
    <TitleSection>
      <TitleHeader>{type}</TitleHeader>
      {children}
    </TitleSection>
  );
}

export default Title;

const TitleSection = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const TitleHeader = styled.h1`
  margin-bottom: 1rem;
`;
