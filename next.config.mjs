/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: false,
  // output: "export",
  assetPrefix: isProd ? "https://aleafdao.github.io/cinema-frontend/" : "",
  basePath: isProd ? "/cinema-frontend" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.seadn.io",
      },
      {
        protocol: "http",
        hostname: "i.seadn.io",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "i.seadn.io",
        pathname: "/s/raw/files/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
