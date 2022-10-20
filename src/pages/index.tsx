import styled from 'styled-components';
import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import netflixLogo from '@assets/netflix-logo.json';

function Home() {
  const router = useRouter();
  const logoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lottieAnimation = Lottie.loadAnimation({
      container: logoContainer.current as HTMLDivElement,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: netflixLogo,
    });

    const timer = setTimeout(() => {
      router.push('/메인페이지');
    }, 6000);

    return () => {
      lottieAnimation?.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <div ref={logoContainer} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
