//requiring path and fs modules
var path = require("path");
var fs = require("fs");

//joining path of directory
var directoryPath = path.join(__dirname, "../../Dropbox/writing/equanimity");
const bookDirectories = [];
const books = [];

exports.getMeta = function() {
  var files = fs.readdirSync(directoryPath);
  files.forEach(function(file) {
    if (fs.lstatSync(path.join(directoryPath, file)).isDirectory()) {
      bookDirectories.push(file);
    }
  });
  console.log(bookDirectories);
  bookDirectories.map(function(dir) {
    var file = fs.readFileSync(path.join(directoryPath, dir) + "/meta.json");
    books.push(JSON.parse(file));
  });
  console.log(books);

  return books;
};
