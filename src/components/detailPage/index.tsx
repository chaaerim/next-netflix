import { IComponentProps } from '@interfaces/interface';
import styled from 'styled-components';
import DetailDescription from './DetailDescription';
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
  Description: DetailDescription,
});

const Container = styled.main`
  padding-bottom: 60px;
`;
