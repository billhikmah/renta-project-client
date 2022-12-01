/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    URL_BACKEND: "https://renta-project-server.vercel.app/",
    URL_CLOUDINARY:
      "https://res.cloudinary.com/dnhoxflfj/image/upload/v1669624326/",
  },
};
const withImages = require("next-images");
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader"),
    });

    return config;
  },
};

module.exports = withImages();
module.exports = nextConfig;
