var express = require('express')
var app = express()
var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


var bauhausui = require('bauhaus-ui')
var login = require('./api/login')
var jsondata = require('./api/jsondata')
var config = require('./config.json')

app.use('/json', jsondata())

app.use('/static', express.static('./static'))

app.use(bauhausui(config))

app.post('/api/login', jsonParser, login)

app.listen(5000)
