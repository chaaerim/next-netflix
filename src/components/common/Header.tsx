import styled from 'styled-components';

const headerItems = ['TV Shows', 'Movies', 'My List'];

function Header() {
  return (
    <HeaderContainer>
      <Logo src="/assets/header/netflix-icon.svg" />
      {headerItems.map((item) => {
        return <Item>{item}</Item>;
      })}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  padding-right: 20px;
  margin-top: 24px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  z-index: 3;
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
