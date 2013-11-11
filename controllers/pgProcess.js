'use strict';

var pidFile   = '/usr/local/var/postgres/postmaster.pid',
    pgProcess = new services.Pgprocess(pidFile, 1000);

pgProcess.start();

pgProcess.on('update', function(processInfo) {
  models.Status.get('pgProcess').set(processInfo);
});
