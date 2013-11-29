'use strict';

var PGDATA    = nconf.get('PGDATA'),
    pidFile   = PGDATA + '/postmaster.pid',
    pgProcess = new services.Pgprocess(pidFile, 1000);

pgProcess.start();

pgProcess.on('update', function(processInfo) {
  models.Status.get('pgProcess').set(processInfo);
});
