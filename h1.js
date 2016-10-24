
const https = require('https')
const certificate = require('certificate')
const alice = require('alice')

const server = https.createServer(certificate, (request, response) => {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.end(alice)
})

server.listen(443)
