import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  imagens:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
