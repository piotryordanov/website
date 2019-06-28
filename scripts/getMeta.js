// Requiring path and fs modules
const path = require('path')
const fs = require('fs')

// Joining path of directory
const directoryPath = path.join(
	__dirname,
	'../../../Dropbox/writing/equanimity'
)

const bookDirectories = []

fs.readdirSync(directoryPath).forEach(file => {
	if (fs.lstatSync(path.join(directoryPath, file)).isDirectory()) {
		if (file !== 'drafts') {
			bookDirectories.push(file)
		}
	}
})

const copyFile = function(dir, name, newName) {
	fs.createReadStream(path.join(dir, name)).pipe(
		fs.createWriteStream(path.join('./static/posts/', newName))
	)
}

const readingTime = require('reading-time')

const meta = []
bookDirectories.map(dir => {
	const PATH = path.join(directoryPath, dir)
	const temp = {title: dir, posts: []}
	fs.readdirSync(PATH).map(file => {
		copyFile(PATH, file, file.split('-')[1])

		const content = fs.readFileSync(path.join(PATH, file), 'utf-8')
		const stats = readingTime(content)

		return temp.posts.push({
			title: file.split('.md')[0].split('-')[1],
			readTime: stats.text,
			date: content.split('\n')[0]
		})
	})
	return meta.push(temp)
})
meta.map(book =>
	book.posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)
)
fs.writeFileSync('./static/meta.json', JSON.stringify(meta))
