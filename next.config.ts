import type { NextConfig } from "next";

// Origin produkcyjny demo TMS+CRM (osobny deploy na Vercel).
const tmsOrigin = process.env.TMS_ORIGIN || "https://demonstracja.kwanek.pl";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tms/:path*",
        destination: `${tmsOrigin}/tms/:path*`,
      },
    ];
  },
};

export default nextConfig;
