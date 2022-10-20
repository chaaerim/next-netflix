import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ISearchContextProps, IInputEventProps } from '@interfaces/interface';
import { SearchProvider, useSearchContext } from './SearchContext';
import * as SInput from './css/SearchInputStyle';
import * as STitle from './css/SearchTitleStyle';

function SearchMain({ children, value }: ISearchContextProps) {
  return (
    <SearchProvider value={value}>
      <Container>{children}</Container>
    </SearchProvider>
  );
}

function SearchTitle() {
  return <STitle.Title>Top Searches</STitle.Title>;
}

function SearchResults() {
  const { input } = useSearchContext();

  return (
    <ul>
      <li>{input}1</li>
      <li>{input}2</li>
      <li>{input}3</li>
    </ul>
  );
}

function SearchInput({ onChange, onReset }: IInputEventProps) {
  const { input } = useSearchContext();

  return (
    <SInput.Container>
      <SInput.FlexBox>
        <Image
          alt="search icon"
          src="/assets/search.svg"
          width={20}
          height={20}
        />
        <SInput.Input
          placeholder="Search for movie"
          value={input}
          onChange={onChange}
        />
      </SInput.FlexBox>
      <button type="button" onClick={onReset}>
        <Image
          alt="reset"
          src="/assets/search-reset.svg"
          width={15}
          height={15}
        />
      </button>
    </SInput.Container>
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
