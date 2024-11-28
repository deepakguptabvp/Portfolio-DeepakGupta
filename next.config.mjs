/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "calarts.edu",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "bloggerspassion.com",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "play-lh.googleusercontent.com",
          pathname: "**",
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

export default nextConfig;
