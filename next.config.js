// next.config.js
const withCSS = require("@zeit/next-css");
const meta = require("./static/meta.json");

const pages = {
  "/": { page: "/index" },
  "/privacy": { page: "/privacy" },
  "/about": { page: "/about" }
};
meta.map(function(book) {
  pages["/book/" + book.title] = { page: "/book" };
  book.posts.map(function(post) {
    pages["/post/" + post] = { page: "/post" };
  });
});

module.exports = withCSS({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return pages;
  }
});
