import type { NextConfig } from "next";

// withPayload wird nur beim Build benötigt — im Dev-Modus direkt skippen
// wenn das Modul nicht geladen werden kann
let withPayload: (config: NextConfig) => NextConfig;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("@payloadcms/next/withPayload");
  withPayload = mod.withPayload ?? mod.default?.withPayload ?? ((c: NextConfig) => c);
} catch {
  withPayload = (c: NextConfig) => c;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.neon.tech",
      },
    ],
  },
};

export default withPayload(nextConfig);
