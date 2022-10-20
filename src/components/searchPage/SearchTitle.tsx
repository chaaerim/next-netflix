import styled from 'styled-components';

function SearchTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
}

export default SearchTitle;

const Title = styled.p`
  font-size: 27px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07px;

  color: #ffffff;

  margin: 21px 10px;
`;
