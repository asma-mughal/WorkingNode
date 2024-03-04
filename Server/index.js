const http = require('http')
const server = http.createServer((request, response) => {
    console.log(request.url, "url")
    if (request.url==="/") {
        response.end("Basic url")
    }
    else if (request.url ==="/about") {
        response.end("About page")
    }
    else if (request.url ==="/contact") {
        response.end("Contact page")
    }
    else {
        response.writeHead("404 pages", {"Content-type":"text/html"})
        response.end("Basic")
    }
})
server.listen(8000, "127.0.0.1", () => {
    console.log("listening")
})