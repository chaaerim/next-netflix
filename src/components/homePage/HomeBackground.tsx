import styled from 'styled-components';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect } from 'react';
import queryKeys from '../../api/queryKeys';
import { getNowPlaying } from '../../api/getMovies';

interface IResponse {
  dates: { maximum: string; minimum: string };
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}

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
  const { data, status } = useQuery<IResponse>(
    [queryKeys.NowPlaying],
    getNowPlaying
  );

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${data?.results[0]?.backdrop_path}`}
      width={100}
      height={100}
    />
  );
}

export default HomeBackground;
