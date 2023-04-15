# Questions

1. How do you create a new Next.js project?
2. How do you add Tailwindcss to the project?
3. How is routing handled in Next.js?
4. What is the difference (at a very basic level) between the `pages` directory and the experimental `app` directory (next 13)?
5. Create and discuss pages that demonstrate the various types of rendering Next.js can do:
   - A. Statically generated page (SSG).
     1. demonstrate the use of these functions:
        - `getStaticPaths`
        - `getStaticProps`
          - Bonus points if it reads data from a .json file on the file system.
     2. When would a page be statically generated without using those functions?
   - B. Server rendered page (SSR)
     1. demonstrate the use of `getServerSideProps`
   - C. How do you make known or make sure code is executed client-side?
6. What does the Next `Image` component do?
7. What options are available to deploy a Next site? [Discuss, don’t have to deploy]
   - A. When would you be able to deploy to any “jamstack” website hosting?
   - B. versus when would you need a Next.js compatible hosting service?
8. Where would you put code that you want to run on every route?
9. how do you get IDs and other info from the URL?
10. What are dynamic routes?

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
