
import type { NextConfig } from "next";

const tmsOrigin =
  process.env.TMS_ORIGIN ||
  "https://northstar-logistics-dashboard.vercel.app";

const przegladyOrigin =
  process.env.PRZEGLADY_ORIGIN ||
  "https://kwanek-demo-przeglady.vercel.app";

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
      {
        source: "/przeglady",
        destination: `${przegladyOrigin}/przeglady/login`,
      },
      {
        source: "/przeglady/:path*",
        destination: `${przegladyOrigin}/przeglady/:path*`,
      },
    ];
  },
};

export default nextConfig;

