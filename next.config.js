/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) Static‑export to `out/` on build
  output: "export",

  // 2) Emit trailing slashes so pages become folders with index.html
  trailingSlash: true,

  // 3) Disable Next’s image optimizer (required for pure static export)
  images: {
    unoptimized: true,
  },

  // 4) Extra optimizations
  reactStrictMode: true,

  // 5) Root redirect
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // HTTP 308
      },
    ];
  },
};

module.exports = nextConfig;