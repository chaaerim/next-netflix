import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Home from '@components/homePage/';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { IResponse } from '@interfaces/interface';

import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from '../../api/getMovies';
import queryKeys from '../../api/queryKeys';

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

const Preview = createContext({ id: 0 });

export function useListTitleContext() {
  return useContext(Preview);
}

function HomePage() {
  const upComing = useQuery([queryKeys.Upcoming], getUpcoming);
  const nowPlaying = useQuery([queryKeys.NowPlaying], getNowPlaying);
  const topRated = useQuery([queryKeys.TopRated], getTopRated);
  const popluar = useQuery([queryKeys.Popular], getPopular);

  const id = 1;

  console.log(upComing);
  return (
    <Home>
      <Header />
      <Home.Background />
      <Home.ButtonBar />
      <Preview.Provider value={{ id }}>
        <Home.ListTitle>Previews</Home.ListTitle>
      </Preview.Provider>
      <Home.ListTitle>Now Playing</Home.ListTitle>
      <Home.ListTitle>Top Rated</Home.ListTitle>
      <Home.ListTitle>Popular</Home.ListTitle>
      <Footer />
    </Home>
  );
}

export default HomePage;
