module.exports = {
  // This is required for hot-reloading to work inside of Docker Compose for local dev
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
