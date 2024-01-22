/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nike.com",
      },
    ],
  },
};

module.exports = nextConfig;
