const express = require('express')

const assets = require('./build/assets.json')
const renderScripts = require('./common/render/scripts')
const renderStyles = require('./common/render/styles')

const app = express()

var flag = 'aa'


app.use(express.static(`${__dirname}/build`))


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

            ${ renderStyles(assets) }
            ${ renderScripts(assets) }

        </head>
        <body>
            <div id="root">
                <h1>ssr markup ${ flag }</h1>
                <img src="dev/logo.png" />
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