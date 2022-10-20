import React from 'react';
import styled from 'styled-components';
import { ISearchContextProps } from '@interfaces/interface';
import Footer from '@components/common/Footer';
import SearchTitle from './SearchTitle';
import SearchResults from './SearchResults';
import SearchInput from './SearchInput';
import { SearchProvider } from './SearchContext';

function SearchMain({ children, value }: ISearchContextProps) {
  return (
    <SearchProvider value={value}>
      <Container>{children}</Container>
      <Footer />
    </SearchProvider>
  );
}

export default Object.assign(SearchMain, {
  Title: SearchTitle,
  Input: SearchInput,
  Result: SearchResults,
});

const Container = styled.main`
  margin-top: 44px;
`;
