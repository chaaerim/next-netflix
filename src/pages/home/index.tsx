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
} from '../../api/getMovies';
import queryKeys from '../../api/queryKeys';

function HomePage() {
  const { data: upComingMovies, status: upComingStatus } = useQuery<IResponse>(
    [queryKeys.Upcoming],
    getUpcoming
  );
  const { data: nowPlayingMovies, status: nowPlayingStatus } =
    useQuery<IResponse>([queryKeys.NowPlaying], getNowPlaying);
  const { data: topRatedMovies, status: topRatedStatus } = useQuery<IResponse>(
    [queryKeys.TopRated],
    getTopRated
  );
  const { data: popularMovies, status: popularStatus } = useQuery<IResponse>(
    [queryKeys.Popular],
    getPopular
  );

  return (
    <Home>
      <Header />
      <Home.Background />
      <Home.ButtonBar />
      <Home.ListTitle id={1}>Previews</Home.ListTitle>
      <Home.MovieLists id={1} contents={upComingMovies?.results} />
      <Home.ListTitle id={0}>Now Playing</Home.ListTitle>
      <Home.MovieLists id={0} contents={nowPlayingMovies?.results} />
      <Home.ListTitle id={0}>Top Rated</Home.ListTitle>
      <Home.MovieLists id={0} contents={topRatedMovies?.results} />
      <Home.ListTitle id={0}>Popular</Home.ListTitle>
      <Home.MovieLists
        id={0}
        contents={popularMovies?.results}
      ></Home.MovieLists>
      <Footer />
    </Home>
  );
}

export default HomePage;

//api fetching with SSR
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
