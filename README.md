# Instant anime search experience powered by Typesense, next.js, and tailwindcss

This is a demo [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that shows how you can use [Typesense's](https://github.com/typesense/typesense) feature set,
to build a anime search website

Live(deployed on Vercel): <https://typesense-anime-search.vercel.app/>

## Prerequisites

- [docker](https://docs.docker.com/desktop/)
- node-version: 16

## Getting Started

First, start a typesense server and create collection and schema in it

```
yarn typesenseServer
yarn indexer
```

Then, install node packages and run the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Detailed steps:

- [build-a-search-application-with-typesense-react-and-tailwind](https://aviyel.com/post/2936/build-a-search-application-with-typesense-react-and-tailwind)
- [Building a Search App in React.js using Typesense, Next.js & Tailwind CSS](https://www.youtube.com/watch?v=cIU19iA8I7U&ab_channel=ZaisteProgramming)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Acknowledgements

- https://github.com/typesense/showcase-nextjs-typesense-ecommerce-store
