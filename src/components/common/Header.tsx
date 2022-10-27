import styled from 'styled-components';

const headerItems = [
  { text: 'TV Shows', id: 1 },
  { text: 'Movies', id: 2 },
  { text: 'My List', id: 3 },
];

function Header() {
  return (
    <HeaderContainer>
      <Logo src="/assets/header/netflix-icon.svg" />
      {headerItems.map((item) => {
        return <Item key={item.id}>{item.text}</Item>;
      })}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  position: relative;
  z-index: 2;
  padding-right: 20px;
  padding-top: 24px;
  /* height: 57px; */
  display: flex;
  justify-content: space-between;
  background: transparent;
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
