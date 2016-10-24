
const http2 = require('http2')
const certificate = require('certificate')
const alice = require('alice')

const server = http2.createServer(certificate, (request, response) => {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.end(alice)
})

server.listen(443)
