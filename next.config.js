/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.rainbowgroup-bd.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
