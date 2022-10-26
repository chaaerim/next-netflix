import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { IResultsProps } from '@interfaces/interface';

function MovieLists({ contents, id }: IResultsProps) {
  const router = useRouter();
  function onClick(id: number) {
    router.push(`home/${id}`);
  }

  return (
    <Container>
      {contents?.map((movie) => (
        <Item
          key={movie.id}
          onClick={() => {
            onClick(movie.id);
          }}
        >
          <MovieImg
            value={id}
            src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.backdrop_path}`}
          />
        </Item>
      ))}
    </Container>
  );
}

export default MovieLists;

const Container = styled.div`
  display: flex;
  overflow-y: auto;
`;
const Item = styled.div`
  cursor: pointer;
  margin-right: 12px;
`;

const MovieImg = styled.img<{ value: number }>`
  width: 103px;
  height: 161px;
  object-fit: cover;

  ${(props) =>
    props.value === 1 &&
    css`
      width: 102px;
      height: 102px;
      border-radius: 50%;
      margin-bottom: 20px;
    `};
`;
