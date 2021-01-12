import fs from 'fs'

const fileToRead = 'testFile'

const fileContents = fs.readFileSync(fileToRead, { encoding: 'utf-8' })
const fileLines = fileContents.split("\n")
console.log(`Read file ${fileToRead}, containing ${fileLines.length} lines`)
const reversedFileLines = fileLines.reverse()
const reversedFileContents = reversedFileLines.join("\n")
fs.writeFileSync(`${fileToRead}.reversed`, reversedFileContents, { encoding: 'utf-8' })
console.log(`Wrote file ${fileToRead}.reversed`)
