import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const footerItems = [
  {
    src: 'home',
    text: 'Home',
  },
  {
    src: 'search',
    text: 'Search',
  },
  {
    src: 'comingsoon',
    text: 'Coming Soon',
  },
  {
    src: 'download',
    text: 'Downloads',
  },
  {
    src: 'more',
    text: 'More',
  },
];

function Footer() {
  const router = useRouter();

  const handleRouting = (route: string) => {
    switch (route) {
      case 'Home':
        router.push('/home');
        break;
      case 'Search':
        router.push('/search');
        break;
      default:
    }
  };

  return (
    <Container>
      {footerItems.map((item) => (
        <Item key={item.text} onClick={() => handleRouting(item.text)}>
          <Image
            alt={item.text}
            src={`/assets/footer/${item.src}.svg`}
            width={24}
            height={24}
          />
          <Title selected={router.pathname === item.src}>{item.text}</Title>
        </Item>
      ))}
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  position: fixed;
  bottom: 0;

  height: 53px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  background: #121212;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
`;

const Title = styled.p<{ selected: boolean }>`
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.26px;

  margin-top: 2px;

  text-align: center;

  color: ${({ selected }) => (selected ? '#ffffff' : '#878787')};
`;
