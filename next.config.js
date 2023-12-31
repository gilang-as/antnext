const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './src/i18n.ts',
);

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

module.exports = withNextIntl(nextConfig);
