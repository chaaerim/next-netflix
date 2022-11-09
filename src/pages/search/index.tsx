import Search from '@components/searchPage';
import Footer from '@components/common/Footer';
import useSearch from '@hooks/useSearch';

function SearchPage() {
  const { input, handleInputChange, handleInputReset } = useSearch('');

  return (
    <Search value={{ input }}>
      <Search.Input onChange={handleInputChange} onReset={handleInputReset} />
      <Search.Title>Top Searches</Search.Title>
      <Search.Result />
      <Footer />
    </Search>
  );
}

export default SearchPage;
