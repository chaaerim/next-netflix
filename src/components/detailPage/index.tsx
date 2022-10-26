import { IComponentProps } from '@interfaces/interface';
import styled from 'styled-components';
import DetailImage from './DetailImage';
import PlayButton from './playButton';

function Detail({ children }: IComponentProps) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default Object.assign(Detail, {
  PlayButton: PlayButton,
  MovieImg: DetailImage,
});

const Container = styled.main``;
