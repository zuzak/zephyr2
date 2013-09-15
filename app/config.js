var convict = require('convict')
var log = require('./logger')

var conf = convict({
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT'
  }
})

try {
  conf.loadFile('../config.json');
  log.info('Using configuration from config.json')
} catch(e) {
  log.info('Using default configuration settings.')
  log.info('Create config.json to change from the defaults')
}

module.exports = conf
