import { IComponentProps } from '@interfaces/interface';
import styled from 'styled-components';
import HomeBackground from './HomeBackground';
import HomeButtons from './HomeButtons';
import ListTitle from './movies/ListTitle';

function Home({ children }: IComponentProps) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default Object.assign(Home, {
  Background: HomeBackground,
  ButtonBar: HomeButtons,
  ListTitle: ListTitle,
});

const Container = styled.main``;
