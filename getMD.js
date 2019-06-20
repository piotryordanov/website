//requiring path and fs modules
var path = require("path");
var fs = require("fs");

//joining path of directory
var directoryPath = path.join(__dirname, "../../Dropbox/writing/equanimity");

const getMD = function(req) {
  const { book, slug } = req.params;
  // const lines = [];
  // var file = fs
  //   .readFileSync(path.join(directoryPath, book, slug) + ".md", "utf8")
  //   .toString()
  //   .split("\n")
  //   .forEach(function(line) {
  //     lines.push(line);
  //   });
  // lines.splice(0, 3);
  // return lines.join("\n");
  return fs.readFileSync(path.join(directoryPath, book, slug) + ".md", "utf8");
};

// getMD({
//   params: {
//     book: "tech-blog",
//     slug: "Day 2: Building this Website"
//   }
// });

exports.getMD = getMD;
