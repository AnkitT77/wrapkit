/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
   NEXT_PUBLIC_RAZORPAY_ID:"rzp_test_M4o1aFsXifn5bV",
    RAZORPAY_SECRET:"KWkYzktLj0kTjbCHPIKk3jln"
  },
  reactStrictMode: false,
  images: {
    domains: ["bwgtcxruldaadezshyej.supabase.co"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
