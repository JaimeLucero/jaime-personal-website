import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'drive.google.com',
      'yspxpvxdxluafgxdptqo.supabase.co',
    ],
  },
};

export default nextConfig;
