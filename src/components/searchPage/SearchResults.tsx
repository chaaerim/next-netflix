import styled from 'styled-components';
import Image from 'next/image';
import { useSearchContext } from './SearchContext';

const list = [
  { id: 1, title: 'item1' },
  { id: 2, title: 'item2' },
  { id: 3, title: 'item3' },
];

function SearchResults() {
  const { input } = useSearchContext();

  return (
    <Container>
      {list.map((movie) => (
        <Item key={movie.id}>
          <FlexBox>
            <Image alt="movie poster" src="" width={146} height={76} />
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

export default SearchResults;

const Container = styled.ul``;

const Item = styled.div`
  width: 100%;
  height: 100%;

  background: #424242;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.75px;

  color: #ffffff;
`;

const PlayButton = styled.button`
  margin-right: 12px;
`;
