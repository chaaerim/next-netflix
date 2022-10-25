import styled, { css } from 'styled-components';
import Image from 'next/image';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { IMovieListResponse } from '@interfaces/interface';
import { useSearchContext } from './SearchContext';
import { getInitialSearchList, getSearchList } from '../../api/getSearch';
import queryKeys from '../../api/queryKeys';

function SearchResults() {
  const { input } = useSearchContext();
  const { data, isSuccess, isLoading } = useQuery<IMovieListResponse>(
    [queryKeys.Search, input],
    () => (input ? getSearchList(input) : getInitialSearchList())
  );

  if (isLoading) {
    return (
      <Container>
        {Array.from(Array(20).keys()).map((item) => (
          <Item key={item}>
            <FlexBox>
              <SkeletonImage />
              <Title isSkeleton />
            </FlexBox>
          </Item>
        ))}
      </Container>
    );
  }

  if (isSuccess)
    return (
      <Container>
        {data.results.map((movie) => (
          <Item key={movie.id}>
            <FlexBox>
              {movie.backdrop_path ? (
                <Image
                  alt="movie poster"
                  src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.backdrop_path}`}
                  width={146}
                  height={76}
                />
              ) : (
                <SkeletonImage />
              )}
              <Title>{movie.title}</Title>
            </FlexBox>
            <PlayButton type="button">
              <Image
                alt="play movie"
                src="/assets/searchPage/search-play.svg"
                width={28}
                height={28}
              />
            </PlayButton>
          </Item>
        ))}
      </Container>
    );

  return <Container />;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    [queryKeys.Search, ''],
    getInitialSearchList
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default SearchResults;

const Container = styled.ul`
  padding-bottom: 50px;
`;

const Item = styled.div`
  width: 100%;
  height: 76px;

  background: #424242;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonImage = styled.div`
  width: 146px;
  height: 76px;

  background: #2c2c2c;
`;

const Title = styled.div<{ isSkeleton?: boolean }>`
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.75px;

  color: #ffffff;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 180px;
  margin-left: 20px;

  ${({ isSkeleton }) =>
    isSkeleton &&
    css`
      background: #2c2c2c;
      border-radius: 4px;
      width: 120px;
      height: 20px;
    `}
`;

const PlayButton = styled.button`
  margin-right: 12px;
`;
