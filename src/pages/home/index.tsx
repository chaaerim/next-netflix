import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Home from '@components/homePage/';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import {
  IMoviesContext,
  IResponse,
  IUpComingMoviesContext,
} from '@interfaces/interface';

import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from '../../api/getMovies';
import queryKeys from '../../api/queryKeys';
import MovieLists from '@components/homePage/movies/MovieLists';

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

// Previews 조건부 스타일링을 위한 context
const Preview = createContext({ id: 0 });
export function useListTitleContext() {
  return useContext(Preview);
}

//
const PreviewMovies = createContext<IUpComingMoviesContext>({
  id: 0,
  results: [],
});
export function useMoviesContext() {
  return useContext(PreviewMovies);
}

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

  const id = 1;
  const results = upComingMovies?.results;

  console.log(nowPlayingMovies);

  return (
    <Home>
      <Header />
      <Home.Background />
      <Home.ButtonBar />
      <Preview.Provider value={{ id }}>
        <Home.ListTitle>Previews</Home.ListTitle>
        <PreviewMovies.Provider value={{ id, results }}>
          <MovieLists />
        </PreviewMovies.Provider>
      </Preview.Provider>
      <Home.ListTitle>Now Playing</Home.ListTitle>
      <Home.ListTitle>Top Rated</Home.ListTitle>
      <Home.ListTitle>Popular</Home.ListTitle>
      <Footer />
    </Home>
  );
}

export default HomePage;
