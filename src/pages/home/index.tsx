import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Home from '@components/homePage/';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { IResponse } from '@interfaces/interface';

import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from '@apis/getMovies';
import queryKeys from '@apis/queryKeys';

function HomePage() {
  const { data: upComingMovies } = useQuery<IResponse>(
    [queryKeys.Upcoming],
    getUpcoming
  );
  const { data: nowPlayingMovies } = useQuery<IResponse>(
    [queryKeys.NowPlaying],
    getNowPlaying
  );
  const { data: topRatedMovies } = useQuery<IResponse>(
    [queryKeys.TopRated],
    getTopRated
  );
  const { data: popularMovies } = useQuery<IResponse>(
    [queryKeys.Popular],
    getPopular
  );

  return (
    <Home>
      <Header />
      <Home.Background />
      <Home.ButtonBar />
      <Home.ListTitle top>Previews</Home.ListTitle>
      <Home.MovieLists top contents={upComingMovies?.results} />
      <Home.ListTitle top={false}>Now Playing</Home.ListTitle>
      <Home.MovieLists top={false} contents={nowPlayingMovies?.results} />
      <Home.ListTitle top={false}>Top Rated</Home.ListTitle>
      <Home.MovieLists top={false} contents={topRatedMovies?.results} />
      <Home.ListTitle top={false}>Popular</Home.ListTitle>
      <Home.MovieLists top={false} contents={popularMovies?.results} />
      <Footer />
    </Home>
  );
}

export default HomePage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery([queryKeys.Upcoming], getUpcoming);

  await queryClient.prefetchInfiniteQuery(
    [queryKeys.NowPlaying],
    getNowPlaying
  );

  await queryClient.prefetchInfiniteQuery([queryKeys.TopRated], getTopRated);

  await queryClient.prefetchInfiniteQuery([queryKeys.Popular], getPopular);
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
