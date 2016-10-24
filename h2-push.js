
const http2 = require('http2')
const certificate = require('certificate')
const fs = require('fs')

const image = fs.readFileSync(__dirname + '/img/push.jpg')

const server = http2.createServer(certificate, (request, response) => {

    const push = response.push('/push.jpg')
    push.end(image)

    response.end(`
        <!DOCTYPE html>
        <h1> Server Push </h1>
        <img src='push.jpg'/>
    `)

})

server.listen(443)
