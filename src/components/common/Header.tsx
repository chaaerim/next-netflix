import styled from 'styled-components';

const headerItems = ['TV Shows', 'Movies', 'My List'];

function Header() {
  return (
    <HeaderContainer>
      <Logo src="/assets/header/netflix-icon.svg" />
      {headerItems.map((item) => {
        return <Item key={Date.now()}>{item}</Item>;
      })}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 24px;
  height: 57px;
  width: 338px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 57px;
  width: 57px;
  cursor: pointer;
`;

const Item = styled.div`
  font-weight: 400;
  font-size: 17.2px;

  line-height: 57px;
  cursor: pointer;
`;
