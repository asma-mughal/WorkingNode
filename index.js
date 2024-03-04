const fileSystem = require('fs')
//To Create File and write on it - if the file is not present the new file is created else it is gets overwrite.
//fileSystem.writeFileSync('read.txt', "Welcome to Hell")
fileSystem.writeFileSync('read.txt', "Now Sleep")
//appending the file
fileSystem.appendFileSync('read.txt', "This is how I am removing the error of Overwriting the file")
//reading the file
const buf_data = fileSystem.readFileSync('read.txt')
org_data = buf_data.toString()
//To rename file 
fileSystem.renameSync("read.txt", "test.txt")
console.log("ac")
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/asma-mughal/FileSystem.git
// git push -u origin main


// fileSystem.mkdir('./newFolder', { recursive: true }, (err) => {
//     if (err)
//     {
//         console.log(err)
//     }
//     else {
//         fileSystem.writeFileSync("./newFolder/bio.txt", "This is my practice")
//         fileSystem.appendFileSync("./newFolder/bio.txt", "I am adding more data")
//         const org_data = fileSystem.readFileSync.toString()
//         fileSystem.renameSync("./newFolder/bio.txt", "./newFolder/mybio.txt")
//     }
// })
// fileSystem.unlink('./newFolder/mybio.txt', (err) => {
//     if (err)
//     {
//         console.log(err, "Err")
//     }
//     else {
//         console.log("Success")
//     }
// })
// fileSystem.rmdir('./newFolder', (errr) => {
//     if (errr)
//     {
//         console.log(errr)
//     }
//     else {
//         console.log("Success")
//     }
// })