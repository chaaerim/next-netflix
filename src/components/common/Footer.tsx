import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IFooterRoute } from '@interfaces/interface';

const footerItems = [
  {
    id: 1,
    src: 'home',
    title: 'Home',
  },
  {
    id: 2,
    src: 'search',
    title: 'Search',
  },
  {
    id: 3,
    src: 'comingsoon',
    title: 'Coming Soon',
  },
  {
    id: 4,
    src: 'download',
    title: 'Downloads',
  },
  {
    id: 5,
    src: 'more',
    title: 'More',
  },
];

function Footer() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.pathname);

  const handleRouting = ({ src, title }: IFooterRoute) => {
    setCurrentPath(`/${src}`);

    if (title === 'Home') {
      router.push('/home');
    } else if (title === 'Search') {
      router.push('/search');
    }
  };

  return (
    <Container>
      {footerItems.map((item) => {
        const isSelected = currentPath === `/${item.src}`;

        return (
          <Item key={item.id} onClick={() => handleRouting(item)}>
            <Image
              alt={item.title}
              src={`/assets/footer/${item.src}${
                isSelected ? '-select' : ''
              }.svg`}
              width={24}
              height={24}
            />
            <Title selected={isSelected}>{item.title}</Title>
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
