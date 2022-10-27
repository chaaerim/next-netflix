import Footer from '@components/common/Footer';
import Detail from '@components/detailPage/';
import ListTitle from '@components/homePage/movies/ListTitle';
import { IMovieInformation, IPrams } from '@interfaces/interface';
import { useQuery } from '@tanstack/react-query';

import { getDetail } from '@apis/getMovies';
import queryKeys from '@apis/queryKeys';

export async function getServerSideProps({ params }: { params: IPrams }) {
  const movieId = params.id;

  return {
    props: {
      movieId,
    },
  };
}

function DetailPage({ movieId }: { movieId: string }) {
  const { data } = useQuery<IMovieInformation>(
    [queryKeys.Detail, movieId],
    () => getDetail(movieId)
  );

  return (
    <Detail>
      <Detail.MovieImg image={data?.backdrop_path} />
      <Detail.PlayButton />
      <ListTitle top>Previews</ListTitle>
      <Detail.Description text={data?.overview} />
      <Footer />
    </Detail>
  );
}

export default DetailPage;
