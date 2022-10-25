import client from './client';

export function getNowPlaying() {
  return client
    .get(`movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.data);
}

export function getPopular() {}
