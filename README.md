# Brian Ireri - Graphic Designer Portfolio

A premium, principle-driven portfolio showcasing graphic design work for churches, events, and brands.

## Environment Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Add your Cloudinary credentials:**
   - Get your cloud name from [Cloudinary Console](https://console.cloudinary.com/)
   - Update `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in `.env.local`

3. **Upload your poster images to Cloudinary in organized folders:**
   ```
   portfolio/
   ├── Bible Study/
   │   ├── image-1.jpg
   │   ├── image-2.jpg
   │   ├── image-3.jpg
   │   └── ... (add more images)
   ├── Real estate/
   │   ├── image-1.jpg
   │   ├── image-2.jpg
   │   ├── image-3.jpg
   │   └── ... (add more images)
   ├── Politics/
   │   ├── image-1.jpg
   │   ├── image-2.jpg
   │   ├── image-3.jpg
   │   └── ... (add more images)
   ├── SMEs/
   │   ├── image-1.jpg
   │   ├── image-2.jpg
   │   ├── image-3.jpg
   │   └── ... (add more images)
   └── placeholder.jpg (optional fallback image)
   ```

4. **The portfolio will display images from each category:**
   - Update the `images` array in `app/page.js` with your actual Cloudinary image URLs
   - Include the full URL with version number and correct file extension
   - Images are clickable and open in a lightbox modal

5. **Upload your Canva anniversary video:**
   - Upload the video to Cloudinary in the `portfolio` folder
   - Name it: `canva-anniversary.mp4`
   - The video will display in the "Top 1% Worldwide" section

6. **Extras Page:**
   - Upload additional designs to Cloudinary in the `portfolio/extras` folder
   - Name them: `image-1`, `image-2`, `image-3`, etc. (up to `image-20`)
   - Supported formats: `.jpg`, `.png`, `.jpeg`, `.webp`
   - They will automatically appear on the `/extras` page
   - No code changes needed!

## Portfolio Categories

Work is organized into 4 main categories:

- **Bible Study** - Visual communication for spiritual growth and church events
- **Real estate** - Property marketing and real estate campaigns  
- **Politics** - Civic engagement and community dialogue initiatives
- **SMEs** - Small business branding and entrepreneurship support

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
