import styled from 'styled-components';
import HomeBackground from './HomeBackground';
import HomeButtons from './HomeButtons';

function Home({ children }: any) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default Object.assign(Home, {
  Background: HomeBackground,
  ButtonBar: HomeButtons,
});

const Container = styled.main``;
