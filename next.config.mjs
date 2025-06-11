/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource'
    });
    if (isServer) {
      const externals = [
        'rebrowser-playwright-core',
        'ghost-cursor-playwright',
        '@playwright/browser-chromium',
        'chromium-bidi',
        'electron',
        'bufferutil',
        'utf-8-validate'
      ];
      config.externals = [...config.externals, ...externals];
    }
    return config;
  },
  experimental: {
    serverMinification: false // the server minification unfortunately breaks the selector class names
  }
};

export default nextConfig;
