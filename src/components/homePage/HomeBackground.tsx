import styled from 'styled-components';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import queryKeys from '../../api/queryKeys';
import { getNowPlaying } from '../../api/getMovies';
import { IResponse } from '@interfaces/interface';

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
  const { data, status } = useQuery<IResponse>(
    [queryKeys.BackGround],
    getNowPlaying
  );

  return (
    <BackgroundImg
      src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${data?.results[2]?.backdrop_path}`}
    />
  );
}

export default HomeBackground;

const BackgroundImg = styled.img`
  z-index: 0;
  height: 415px;
  width: 100%;
  object-fit: cover;
`;
