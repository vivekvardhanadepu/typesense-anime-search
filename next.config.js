/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s4.anilist.co", "cdn.myanimelist.net", "media.kitsu.io"],
  },
};

module.exports = nextConfig;
