var express = require('express')
var config = require('./config')
var log = require('./logger')
var app = module.exports = express()

app.get('/', function(req, res){
  res.send("hello world")
})

app.listen(config.get('port'), config.get('ip'), function () {
  log.info('Listening on http://%s:%s',config.get('ip'),config.get('port'));
});
