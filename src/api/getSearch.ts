import client from './client';

export function getInitialSearchList() {
  return client
    .get(`movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}

export function getSearchList(keyword: string) {
  return client
    .get(
      `search/movie/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${keyword}`
    )
    .then((res) => res.data);
}
