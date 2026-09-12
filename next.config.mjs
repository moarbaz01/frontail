/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Consolidate top-level legacy service pages to canonical service routes
      {
        source: "/mvp-development",
        destination: "/services/mvp-development",
        permanent: true,
      },
      {
        source: "/web-saas-development",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/mobile-app-development",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/ui-ux-for-startups",
        destination: "/services/ui-ux-for-startups",
        permanent: true,
      },
      {
        source: "/web3-development",
        destination: "/services/web3-development",
        permanent: true,
      },
      {
        source: "/ai-development",
        destination: "/services/ai-development",
        permanent: true,
      },
      {
        source: "/custom-tools-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/custom-software-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      // Migration from old custom-tools-development slug to custom-software-development
      {
        source: "/services/custom-tools-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
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
        destination: "/services/custom-software-development",
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
      {
        protocol: "https",
        hostname: "behold.pictures", // Behold Instagram feed CDN
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
