'use strict';

var PGDATA    = nconf.get('PGDATA'),
    logFile   = findPglogFileSync(PGDATA),
    logReader = new services.Readlogs(PGDATA + '/pg_log/' + logFile),
    tmpLog    = {};

logReader.start();

logReader.on('line', function(line) {
  var lineS = line.split(':', 1), 
      query, pre, preInfo;

  if (lineS[0] === 'PRE') {
    pre   = line.substr(lineS[0].length + 1).trim().split('|:|');
    query = pre[1].match(/^LOG:\s*([a-z]*):(.*)/);
    pre   = pre[0];

    preInfo = _.object(
      [ 'dbname', 'processId', 'timestamp', 'command', 'sessionsId', 'sessionLine', 'sessionTimestamp' ],
      pre.split('|')
    );
    console.log(query);
    console.log(preInfo);
  }
  //models.Status.get('pgProcess').set(processInfo);
});


function findPglogFileSync(rootDir) {
  var dir = fs.readdirSync(rootDir + '/pg_log');
  return dir.pop();
}
