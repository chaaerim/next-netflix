import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const [currentPath, setCurrentPath] = useState(router.pathname);

  const handleRouting = ({ src, text }: { src: string; text: string }) => {
    setCurrentPath(`/${src}`);
    switch (text) {
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
      {footerItems.map((item) => {
        const isSelected = currentPath === `/${item.src}`;

        return (
          <Item key={item.text} onClick={() => handleRouting(item)}>
            <Image
              alt={item.text}
              src={`/assets/footer/${item.src}${
                isSelected ? '-select' : ''
              }.svg`}
              width={24}
              height={24}
            />
            <Title selected={isSelected}>{item.text}</Title>
          </Item>
        );
      })}
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
