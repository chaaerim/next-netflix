import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Home from '@components/homePage/';

function HomePage() {
  return (
    <Home>
      <Header />
      <Home.Background />
      <Home.ButtonBar />
      <Footer />
    </Home>
  );
}

export default HomePage;
