/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug([\\w\\-]+)",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
