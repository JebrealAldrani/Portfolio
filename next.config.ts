import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // ينبهك لمشاكل React ويحسن الكود
  compiler: {
    styledComponents: true, // لو تستخدم styled-components لتحسين الـ SSR
  },
  // images: {
  //   domains: ["images.unsplash.com", "yourcdn.com"], // المصادر المسموح بها للـ next/image
  //   formats: ["image/avif", "image/webp"], // تحسين الصور لأحدث الصيغ
  // },
};

export default nextConfig;
