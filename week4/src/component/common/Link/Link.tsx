import styled from 'styled-components';

interface SmallLinkProps {
  text: string;
  showDesc?: boolean;
  onClick?: () => void;
}

const Link = ({ text, onClick }: SmallLinkProps) => {
  return (
    <Container>
      <LinkSection onClick={onClick}>{text}</LinkSection>
    </Container>
  );
};

export default Link;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkSection = styled.p`
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1rem;
`;
