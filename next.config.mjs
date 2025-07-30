/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compiler: {
        compiler: {
            removeConsole: process.env.NODE_ENV === 'production',
        },
    },
    images: {
        domains: ['res.cloudinary.com', 'cdn.pixabay.com']
    },
};

export default nextConfig;
