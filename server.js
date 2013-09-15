var cluster = require('cluster')

var appLocation = './app'
if (process.env.USE_COVERAGE) {
  var appLocation = './app-cov'
}

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }
} else {
  var app = require(appLocation)
}

cluster.on('exit', function(worker) {
  // worker died; replace:
  cluster.fork()
})
