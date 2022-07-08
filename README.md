This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, start a typesense server and create collection and schema in it

```
docker run -d -p 8108:8108 -v {local_dir_name}:/{server_dir_name} \
    typesense/typesense:0.23.0 --data-dir /{server_dir_name} \
    --api-key=xyz --enable-cors
cd data/
node loadSchema.js
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Detailed steps:

- [build-a-search-application-with-typesense-react-and-tailwind](https://aviyel.com/post/2936/build-a-search-application-with-typesense-react-and-tailwind)
- [Building a Search App in React.js using Typesense, Next.js & Tailwind CSS](https://www.youtube.com/watch?v=cIU19iA8I7U&ab_channel=ZaisteProgramming)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
