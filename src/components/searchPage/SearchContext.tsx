import { ISearchContextProps } from '@interfaces/interface';
import { createContext, useContext } from 'react';

const SearchContext = createContext({ input: '' });

function SearchProvider({ children, value }: ISearchContextProps) {
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearchContext() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}

export { SearchProvider, useSearchContext };
