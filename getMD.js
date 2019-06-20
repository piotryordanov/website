//requiring path and fs modules
var path = require("path");
var fs = require("fs");

//joining path of directory
var directoryPath = path.join(__dirname, "../../Dropbox/writing/equanimity");

exports.getMD = function(req) {
  const { book, slug } = req.params;
  var file = fs.readFileSync(
    path.join(directoryPath, book, slug) + ".md",
    "utf8"
  );
  return file;
};
