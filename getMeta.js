// Requiring path and fs modules
const path = require('path')
const fs = require('fs')

// Joining path of directory
const directoryPath = path.join(__dirname, '../../Dropbox/writing/equanimity')

const bookDirectories = []

fs.readdirSync(directoryPath).forEach(file => {
	if (fs.lstatSync(path.join(directoryPath, file)).isDirectory()) {
		if (file !== 'drafts') {
			bookDirectories.push(file)
		}
	}
})

const copyFile = function(dir, name) {
	fs.createReadStream(path.join(dir, name)).pipe(
		fs.createWriteStream(path.join('./static/posts/', name))
	)
}

const meta = []
bookDirectories.map(dir => {
	const PATH = path.join(directoryPath, dir)
	const temp = {title: dir, posts: []}
	fs.readdirSync(PATH).map(file => {
		copyFile(PATH, file)
		return temp.posts.push(file.split('.md')[0])
	})
	return meta.push(temp)
})

fs.writeFileSync('./static/meta.json', JSON.stringify(meta))
