import client from './client';

export function getNowPlaying() {
  return client
    .get(`movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}

export function getPopular() {
  return client
    .get(`movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}

export function getTopRated() {
  return client
    .get(`movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}

export function getUpcoming() {
  return client
    .get(`movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}

export function getDetail(id: string) {
  return client
    .get(`movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}
