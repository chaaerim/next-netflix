import React from 'react';
import { ISearchContextProps, IInputEventProps } from '@interfaces/interface';
import { SearchProvider, useSearchContext } from './SearchContext';

function SearchMain({ children, value }: ISearchContextProps) {
  return <SearchProvider value={value}>{children}</SearchProvider>;
}

function SearchTitle() {
  return <div>Top Searches</div>;
}

function SearchInput({ onChange, onReset }: IInputEventProps) {
  const { input } = useSearchContext();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <button type="button" onClick={onReset}>
        x
      </button>
    </div>
  );
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

export default Object.assign(SearchMain, {
  Title: SearchTitle,
  Input: SearchInput,
  Result: SearchResults,
});
