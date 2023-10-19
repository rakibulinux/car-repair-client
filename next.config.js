/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
      "avatars.githubusercontent.com",
      "smartdata.tonytemplates.com",
      "github.com",
      "utfs.io",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
