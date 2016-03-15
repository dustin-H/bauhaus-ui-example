var express = require('express')
var app = express()

var bauhausui = require('bauhaus-ui')
var login = require('./api/login')
var jsondata = require('./api/jsondata')
var config = require('./config.json')

app.use('/json', jsondata())

app.use('/static', express.static('./static'))

app.use(bauhausui(config))

app.post('/api/login', login)

app.listen(8123)
