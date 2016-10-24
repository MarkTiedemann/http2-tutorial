
const http2 = require('http2')
const certificate = require('certificate')
const fs = require('fs')

const image = fs.readFileSync(__dirname + '/img/pull.jpg')

const server = http2.createServer(certificate, (request, response) => {

    switch (request.url) {

        case '/':
            response.end(`
                <!DOCTYPE html>
                <h1> Server Pull </h1>
                <img src='pull.jpg'/>
            `)
            break

        case '/pull.jpg':
            response.end(image)
            break
    }

})

server.listen(443)
