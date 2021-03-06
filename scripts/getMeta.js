/* eslint-disable */
// Requiring path and fs modules
const path = require("path")
const fs = require("fs")
const readingTime = require("reading-time")

// Joining path of directory
const directoryPath = path.join(
  __dirname,
  "../../../Dropbox/writing/equanimity"
)

const bookDirectories = []

fs.readdirSync(directoryPath).forEach(file => {
  if (fs.lstatSync(path.join(directoryPath, file)).isDirectory()) {
    if (file !== "drafts") {
      bookDirectories.push(file)
    }
  }
})

const copyFile = function(Path, newName) {
  fs.createReadStream(Path).pipe(
    fs.createWriteStream(path.join("./static/posts/", newName))
  )
}

const sharp = require("sharp")

const convertImage = (source, imageID) =>
  sharp(`${source}/${imageID}.jpg`)
    .resize({ width: 2000 })
    .toFile(`./static/posts/${imageID}.jpg`)
    .then(() => {
      // Output.png is a 200 pixels wide and 300 pixels high image
      // containing a nearest-neighbour scaled version
      // contained within the north-east corner of a semi-transparent white canvas
    })

const meta = []
bookDirectories.map(dir => {
  const PATH = path.join(directoryPath, dir)
  const temp = { title: dir, posts: [] }
  fs.readdirSync(PATH).map(file => {
    // Only process markdown files
    if (file.indexOf("md") > 0) {
      const currPath = path.join(PATH, file)
      copyFile(currPath, file.split("-")[1])

      const Content = fs.readFileSync(currPath, "utf-8")
      const content = Content.split("\n")

      if (content[0] === "published") {
        const stats = readingTime(Content)
        const title = file.split(".md")[0].split("-")[1]
        const imageID = content[2]
        convertImage(PATH, imageID)

        return temp.posts.push({
          title,
          cover: imageID,
          readTime: stats.text,
          date: content[1]
        })
      }
    }

    return 0
  })
  return meta.push(temp)
})
meta.map(book =>
  book.posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
)
fs.writeFileSync("./static/meta.json", JSON.stringify(meta))
