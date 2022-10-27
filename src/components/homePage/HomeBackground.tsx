import styled from 'styled-components';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getNowPlaying } from '@apis/getMovies';
import { IResponse } from '@interfaces/interface';
import queryKeys from '@apis/queryKeys';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    [queryKeys.BackGround],
    getNowPlaying
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function HomeBackground() {
  const { data } = useQuery<IResponse>([queryKeys.BackGround], getNowPlaying);

  return (
    <Container>
      <BackgroundImg
        src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${data?.results[2]?.backdrop_path}`}
      />
    </Container>
  );
}

export default HomeBackground;

const Container = styled.div`
  height: 400px;
  width: 100%;
  object-fit: cover;
  z-index: 1;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 460px;

  object-fit: cover;
`;
