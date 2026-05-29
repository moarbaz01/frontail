/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services/1",
        destination: "/services/mvp-development",
        permanent: true,
      },
      {
        source: "/services/2",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/services/3",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/services/4",
        destination: "/services/ui-ux-for-startups",
        permanent: true,
      },
      {
        source: "/services/5",
        destination: "/services/web3-development",
        permanent: true,
      },
      {
        source: "/services/6",
        destination: "/services/ai-development",
        permanent: true,
      },
      {
        source: "/services/7",
        destination: "/services/custom-tools-development",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
};

export default nextConfig;
