/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.biochemicalbd.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
