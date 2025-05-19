import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable source map if needed
    productionBrowserSourceMaps: true,
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    transpilePackages: ['antd'],
    swcMinify: true,
    experimental: {
        // Required:
        appDir: true,
    },
    compiler: {
        emotion: true,
    },
};

export default withNextIntl(nextConfig);

