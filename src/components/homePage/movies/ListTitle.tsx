import styled from 'styled-components';

function ListTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
}

export default ListTitle;

const Title = styled.div`
  font-weight: 700;
  font-size: 20.9212px;

  color: #ffffff;
`;
