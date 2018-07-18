const express = require('express')

const app = express()

var flag = 'aa'


app.use((req, res, next) => {

    // res.setHeader('Access-Control-Allow-Origin', '*')

    res.setHeader('X-TEST-HEADER', 'TEST')

    flag = 'bb'

    next()

})


app.get('/', (req, res) => {

    // res.setHeader('Content-Type', 'text/html')

    res
    .status(200)
    .send(
    `<!doctype html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>lambda-ssr-poc</title>
        </head>
        <body>
            <div id="root">
                <h1>ssr markup ${ flag }</h1>
            </div>
        </body>
    </html>`
    )

})


app.get('/test', (req, res) => {

    // res.setHeader('Content-Type', 'application/json')

    res.json({ message: 'test api' })

})


module.exports = app