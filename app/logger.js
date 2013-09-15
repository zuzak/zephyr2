var winston = require('winston')

var log = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ],
  levels: {
    info: 5,
    warn: 8,
    error: 10
  },
  colors: {
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
})

module.exports = log
