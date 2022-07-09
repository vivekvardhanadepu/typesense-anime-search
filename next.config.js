/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "s4.anilist.co",
      "cdn.myanimelist.net",
      "media.kitsu.io",
      "cdn.anime-planet.com",
      "cdn.anisearch.com",
      "anime-planet.com",
    ],
  },
};

module.exports = nextConfig;
