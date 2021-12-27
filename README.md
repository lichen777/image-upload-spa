This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/images](http://localhost:3000/api/images). This endpoint can be edited in `pages/api/images.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Notes

The basic UI functionalities and APIs have been completed based on the given UX mockup. Since the UX is simplified, I made several assumptions: 

1. There are finite number of images stored and shown. So pagination is not added to the "List all uploaded images" API design. 
2. All images can be identified uniquely by their file names, which means there is no duplication of the image file names. To prevent duplication and to show better user interface, I would like to set up a database table to store image metadata, so we can serve an unique id for each image and a more user readable image title.
3. Loading AND Error states of the image upload and images fetching are simplified due to lack of UX details. With more detials, I'd like to refine those states for better user experience and better error handling. 
4. Currently upload API only supports single image file upload. If needed, we can change the default behaviour to multiple files upload at once.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
