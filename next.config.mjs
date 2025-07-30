/** @type {import('next').NextConfig} */
const nextConfig = {

    compiler: {
        removeConsole: {
            exclude: ['error', 'warn'], // Exclude error and warn from removal
        },
    },
    images: {
        domains: ['res.cloudinary.com', 'cdn.pixabay.com']
    },
};

export default nextConfig;
