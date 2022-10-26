import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Home from '@components/homePage/';
import { dehydrate, QueryClient } from 'react-query';
import { createContext } from 'react';

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

function HomePage() {
  return (
    <Home>
      <Header />
      <Home.Background />
      <Home.ButtonBar />
      <Footer />
    </Home>
  );
}

export default HomePage;
