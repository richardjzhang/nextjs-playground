module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  transpilePackages: ["ui", "contentful", "dayjs", "openai"],
  experimental: {
    appDir: true,
  },
};
