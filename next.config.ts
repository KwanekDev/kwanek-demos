
import type { NextConfig } from "next";

const tmsOrigin =
  process.env.TMS_ORIGIN ||
  "https://northstar-logistics-dashboard.vercel.app";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      {
        source: "/tms",
        destination: `${tmsOrigin}/tms/login`,
      },
      {
        source: "/tms/:path*",
        destination: `${tmsOrigin}/tms/:path*`,
      },
    ];
  },
};

export default nextConfig;

