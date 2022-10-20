import Search from '@components/searchPage/Search';
import useSearch from '@components/searchPage/useSearch';

function SearchPage() {
  const { input, handleInputChange, handleInputReset } = useSearch('');

  return (
    <Search value={{ input }}>
      <Search.Title />
      <Search.Input onChange={handleInputChange} onReset={handleInputReset} />
      <Search.Result />
    </Search>
  );
}

export default SearchPage;
