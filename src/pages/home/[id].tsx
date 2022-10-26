import Footer from '@components/common/Footer';
import Detail from '@components/detailPage/';
import ListTitle from '@components/homePage/movies/ListTitle';
import { IMovieInformation, IPrams } from '@interfaces/interface';
import { useQuery } from '@tanstack/react-query';

import { getDetail } from '../../api/getMovies';
import queryKeys from '../../api/queryKeys';

export async function getServerSideProps({ params }: { params: IPrams }) {
  const movie_id = params.id;

  return {
    props: {
      movie_id: movie_id,
    },
  };
}

function DetailPage({ movie_id }: { movie_id: string }) {
  const { data, status } = useQuery<IMovieInformation>(
    [queryKeys.Detail, movie_id],
    () => getDetail(movie_id)
  );

  return (
    <Detail>
      <Detail.MovieImg image={data?.backdrop_path} />
      <Detail.PlayButton />
      <ListTitle id={1}>Previews</ListTitle>
      <Detail.Description text={data?.overview}></Detail.Description>
      <Footer />
    </Detail>
  );
}

export default DetailPage;
