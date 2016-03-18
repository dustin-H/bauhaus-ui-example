var express = require('express')
var app = express()
var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var superagent = require('superagent');

var bauhausui = require('bauhaus-ui')
var login = require('./api/login')
var jsondata = require('./api/jsondata')
var config = require('./config.json')

app.use('/json', jsondata())

app.use('/static', express.static('./static'))

app.use(bauhausui(config))

app.post('/api/login', jsonParser, login)

app.listen((process.env.PORT || 5000))

setInterval(function() {
  var d = (new Date()).getHours()
  if (d > 7 && d < 22) {
    superagent.get('https://bauhaus-ui.herokuapp.com').end(function(err, res) {
      console.log('REQ', err == null)
    })
  }
}, 1000 * 60)
