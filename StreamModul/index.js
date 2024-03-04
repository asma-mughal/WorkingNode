const fs = require('fs')
const http = require('http')
const server = http.createServer();
// server.on('request', (req, res) => {
//     fs.readFile("./input.txt", (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.end(data.toString())
//         }
//     })
// })
//The above all code is non-streaming way to read file
//Below code is streamig way to read file

server.on('request', (req, res) => {
    // const rsStream = fs.createReadStream("./input.txt")
    // rsStream.on('data', (chunkData) => {
    //     res.write(chunkData.toString())
    // })
    // rsStream.on('end', () => {
    //     res.end()
    // })
    // rsStream.on('error', (err) => {
    //     console.log(err)
    // })
    const resStream = fs.createReadStream("./input.txt")
    resStream.pipe(res)
})

server.listen(8000, "127.0.0.1")