
var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

module.exports = function(){
  var app = express()

  var theData = {};

  app.get('/:id', function(req, res) {
    if (theData[req.params.id] !== false) {
      if (theData[req.params.id] == null) {
        theData[req.params.id] = {};
      }
      res.json(theData[req.params.id]);
    } else {
      res.status(404)
        .send();
    }
  });

  app.put('/:id', jsonParser, function(req, res) {
    theData[req.params.id] = req.body;
    res.send();
  });

  app.delete('/:id', function(req, res) {
    theData[req.params.id] = false;
    res.send();
  });

  return app
}
