import Search from '@components/searchPage';
import useSearch from '@components/searchPage/useSearch';

function SearchPage() {
  const { input, handleInputChange, handleInputReset } = useSearch('');

  return (
    <Search value={{ input }}>
      <Search.Input onChange={handleInputChange} onReset={handleInputReset} />
      <Search.Title />
      <Search.Result />
    </Search>
  );
}

export default SearchPage;
