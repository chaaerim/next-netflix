/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'api.themoviedb.org'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
