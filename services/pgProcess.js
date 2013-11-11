'use strict';

function PgProcess(pidFile, interval) {
  this.interval   = interval;
  this.intervalId = null;
  this.events     = new events.EventEmitter();
  this.pgPid      = 0;

  this.CPU = 0;
  this.MEM = 0;

  var self = this;
  fs.readFile(pidFile, { encoding : 'utf8' }, function (err, result) {
    if (err) {
      console.error('Pid File Reading Failed');
      process.exit(1);
    }

    self.pgPid = +result.split('\n')[0];
  });
}

PgProcess.prototype.start = function () {
  var self = this;

  this.intervalId = setInterval(function() {
    exec('ps -p ' + self.pgPid + ' -o %cpu,cputime,%mem,vsz,rss,ruser,etime,lstart',
      function (err, stdout, stderr) {
        if (err || stderr) {
          console.error('ps error');
        }

        var lines   = stdout.split('\n'),
            names   = lines[0].split(/\s+/).slice(1),
            values  = lines[1].split(/\s+/).slice(1),
            started = values.slice(7, -1).join(' '),
            results;

        values  = values.slice(0, 7).concat(started);
        results = _.object(names, values);

        self.emit('update', results);
      });
  }, this.interval);
};

PgProcess.prototype.on = function() {
  this.events.on.apply(this, arguments);
}

PgProcess.prototype.emit = function() {
  this.events.emit.apply(this, arguments);
}


module.exports = PgProcess;
