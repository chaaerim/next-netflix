import { ChangeEvent, ReactNode } from 'react';

export interface IComponentProps {
  children: ReactNode;
}

export interface ISearchContextProps extends IComponentProps {
  value: {
    input: string;
  };
}

export interface IListTitleProps {
  children: ReactNode;
  top: boolean;
}

export interface IInputEventProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export interface IMovieInformation {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieListResponse {
  page: number;
  results: IMovieInformation[];
  total_pages: number;
  total_results: number;
}

export interface IUpComingMoviesContext {
  id: number;
  results: IMovieInformation[] | undefined;
}

export interface IResponse {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovieInformation[];
  total_pages: number;
  total_results: number;
}

export interface IResultsProps {
  contents: IMovieInformation[] | undefined;
  top: boolean;
}

export interface IPrams {
  id: string;
}

export interface IFooterRoute {
  src: string;
  title: string;
}
