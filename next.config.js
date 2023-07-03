/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [""],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
