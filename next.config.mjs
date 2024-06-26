/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // output: "export",
  // assetPrefix: "/home",
  // basePath: "/home",
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
