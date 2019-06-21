const express = require("express");
const next = require("next");
const getMeta = require("./getMeta");
const getMD = require("./getMD");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

console.log(getMeta.getMeta());
app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/book/:book/post/:slug", (req, res) => {
      const actualPage = "/post";
      const queryParams = { book: req.params.book, slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });
    server.get("/book/:book", (req, res) => {
      const actualPage = "/book";
      const queryParams = { book: req.params.book };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/getmeta", (req, res) => {
      res.json(getMeta.getMeta());
    });

    server.get("/getMD/:book/:slug", (req, res) => {
      res.send(getMD.getMD(req));
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
