'use strict';

var Tail = require('tail').Tail;

function readLog(logFile) {
  this.events  = new events.EventEmitter();
  this.logFile = logFile;

  this.readStream = null;

  if (!fs.existsSync(logFile) ) {
    console.error('Log File does not exist');
    process.exit(1);
  }
}

readLog.prototype.start = function () {
  var tmp = '', 
      self = this,
      tail = null;


  this.readStream = fs.createReadStream(this.logFile, {
    fd         : null,
    flags      : 'r',
    encoding   : 'utf-8',
    bufferSize : 64 * 1024,
  });

  this.readStream.addListener('data', function(data) {
    self.readStream.pause();
    data = data.split('\n');

    if (tmp.length != 0) {
      data[0] = tmp + data[0];
    }

    for (var i = 0; i < data.length - 1; i++) {
      self.emit('line', data[i]);
    }

    tmp = data.pop();
    self.readStream.resume();
  });

  this.readStream.on('end', function() {
    self.readStream.close();

    tail = new Tail(self.logFile);

    tail.on('line', function(line) {
      self.emit('line', line);
    });
  });
};

readLog.prototype.on = function() {
  this.events.on.apply(this, arguments);
}

readLog.prototype.emit = function() {
  this.events.emit.apply(this, arguments);
}


module.exports = readLog;
