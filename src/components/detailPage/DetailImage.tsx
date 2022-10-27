import styled from 'styled-components';

function DetailImage({ image }: { image: string | undefined }) {
  return (
    <BackgroundImg src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${image}`} />
  );
}

export default DetailImage;

const BackgroundImg = styled.img`
  z-index: 0;
  height: 415px;
  width: 100%;
  object-fit: cover;
`;
