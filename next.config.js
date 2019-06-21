// next.config.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/index" },
      "/privacy": { page: "/privacy" }
    };
  }
});
