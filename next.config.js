// module.exports = {
//   pageExtensions: ['tsx']
// }

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
