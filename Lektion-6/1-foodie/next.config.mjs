/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'perceptive-zebra-776.convex.cloud',
      },
    ],
  },
};

export default nextConfig;
