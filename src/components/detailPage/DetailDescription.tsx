import styled from 'styled-components';

function DetailDescription({ text }: { text: string | undefined }) {
  return (
    <Container>
      <TextArea>{text}</TextArea>
    </Container>
  );
}

export default DetailDescription;

const Container = styled.div`
  margin: auto;
  width: 80%;
`;
const TextArea = styled.div`
  font-weight: 400;
  font-size: 11.1409px;
  color: rgba(255, 255, 255, 0.83);
`;
