// Next.config.js
const withCSS = require("@zeit/next-css")
const meta = require("./static/meta.json")

const pages = {
  "/": { page: "/index" },
  "/privacy": { page: "/privacy" },
  "/about": { page: "/about" }
}
meta.map(book => {
  pages["/book/" + book.title] = { page: "/book" }
  return book.posts.map(post => {
    pages["/post/" + post] = { page: "/post" }
    return 0
  })
})

module.exports = withCSS({
  target: "serverless",
  // eslint-disable-next-line no-unused-vars
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return pages
  }
})
