import styled from 'styled-components';
import Image from 'next/image';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { IMovieListResponse } from '@interfaces/interface';
import { useSearchContext } from './SearchContext';
import { getInitialSearchList, getSearchList } from '../../api/getSearch';

function SearchResults() {
  const { input } = useSearchContext();
  const { data, isSuccess } = useQuery<IMovieListResponse>(
    ['search', input],
    () => (input ? getSearchList(input) : getInitialSearchList())
  );

  return (
    <Container>
      {isSuccess &&
        data.results.map((movie) => (
          <Item key={movie.id}>
            <FlexBox>
              <Image
                alt="movie poster"
                src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.backdrop_path}`}
                width={146}
                height={76}
              />
              <Title>{movie.title}</Title>
            </FlexBox>
            <PlayButton type="button">
              <Image
                alt="play movie"
                src="/assets/search-play.svg"
                width={28}
                height={28}
              />
            </PlayButton>
          </Item>
        ))}
    </Container>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['search'], getInitialSearchList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default SearchResults;

const Container = styled.ul``;

const Item = styled.div`
  width: 100%;
  height: 100%;

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

const Title = styled.div`
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
`;

const PlayButton = styled.button`
  margin-right: 12px;
`;
