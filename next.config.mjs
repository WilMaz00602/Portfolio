/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: 'build', // Custom output directory
    output: 'export', // Static export
    images: { unoptimized: true }
};

export default nextConfig;
