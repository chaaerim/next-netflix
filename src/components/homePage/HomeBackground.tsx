import styled from 'styled-components';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import queryKeys from '../../api/queryKeys';
import { getNowPlaying } from '../../api/getMovies';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    [queryKeys.NowPlaying],
    getNowPlaying
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function HomeBackground() {
  const { data, status } = useQuery<any>([queryKeys.NowPlaying], getNowPlaying);

  const backgroundImage = data[0]?.backdrop_path;

  return (
    <>
      <img src={backgroundImage} />
    </>
  );
}

export default HomeBackground;
