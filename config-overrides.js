/* config-overrides.js */

module.exports = function override(config, env) {
  config.resolve.fallback.path = require.resolve("path-browserify");
  return config;
};

// {
//   resolve: {
//     fallback: {
//       path: require.resolve("path-browserify");
//     }
//   }
// }
