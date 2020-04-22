module.exports = {
  webpack(config, options) {
    // Ensure certain dependencies are transpiled with Babel, for compatibility with IE11
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [
        // https://github.com/ai/nanoid/releases/tag/3.0.0
        // Must transpile nanoid for IE11 compat
        /nanoid(?!.*node_modules)/,
      ],
      use: options.defaultLoaders.babel,
    });

    return config;
  },
};
