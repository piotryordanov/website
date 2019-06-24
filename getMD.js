// Requiring path and fs modules
const path = require('path')
const fs = require('fs')

// Joining path of directory
const directoryPath = path.join(__dirname, '../../Dropbox/writing/equanimity')

const getMD = function(req) {
	const {book, slug} = req.params
	// Const lines = [];
	// var file = fs
	//   .readFileSync(path.join(directoryPath, book, slug) + ".md", "utf8")
	//   .toString()
	//   .split("\n")
	//   .forEach(function(line) {
	//     lines.push(line);
	//   });
	// lines.splice(0, 3);
	// return lines.join("\n");
	return fs.readFileSync(path.join(directoryPath, book, slug) + '.md', 'utf8')
}

// GetMD({
//   params: {
//     book: "tech-blog",
//     slug: "Day 2: Building this Website"
//   }
// });

exports.getMD = getMD
