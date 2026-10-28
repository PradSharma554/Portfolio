/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next.js 16 only allows quality 75 by default; keep the qualities this site uses.
    qualities: [75, 85, 100],
  },
};

export default nextConfig;
