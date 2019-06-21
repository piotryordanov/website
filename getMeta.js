//requiring path and fs modules
var path = require("path");
var fs = require("fs");

//joining path of directory
var directoryPath = path.join(__dirname, "../../Dropbox/writing/equanimity");

const bookDirectories = [];

fs.readdirSync(directoryPath).forEach(function(file) {
  if (fs.lstatSync(path.join(directoryPath, file)).isDirectory()) {
    if (file != "drafts") {
      bookDirectories.push(file);
    }
  }
});

const copyFile = function(dir, name) {
  fs.createReadStream(path.join(dir, name)).pipe(
    fs.createWriteStream(path.join("./static/posts/", name))
  );
};

let meta = [];
bookDirectories.map(function(dir) {
  let PATH = path.join(directoryPath, dir);
  let temp = { title: dir, posts: [] };
  fs.readdirSync(PATH).map(function(file) {
    copyFile(PATH, file);
    temp.posts.push(file.split(".md")[0]);
  });
  meta.push(temp);
});

fs.writeFileSync("./static/meta.json", JSON.stringify({ books: meta }));
