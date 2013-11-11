'use strict';
function Header(parent) {
  var 
    status    = models.Status,
    pgProcess = status.get('pgProcess'),
    headerBox = blessed.Element({
      width  : '100%',
      height : 7,
      style  : {
        bg : '#111',
        fg : '#fff'
      }
    }),
    queriesStatus = blessed.Element({
      width : '50%',
      align : 'left', 
      style : {
        bg : 'blue',
        fg : 'green'
      }
    }),
    processStatus = blessed.Element({
      width : '50%',
      right : 0
    }),
    processTextElem = blessed.Element({
      width  : '100%',
      valign : 'middle',
      left   : 5,
      tags   : 'true'
    }),
    processText = 
      'PG Process \n' +
      '   CPU : %s%% \n' +
      '   MEM : %s%% \n' +
      '   RMEM: %sMB \n';

  processTextElem.content = util.format(processText, pgProcess.get('CPU'), pgProcess.get('MEM'));

  pgProcess.on('change', function(process) {
    processTextElem.content = util.format(processText,
                                            process.get('%CPU'),
                                            process.get('%MEM'),
                                            process.get('RSS') / 1024
    );

    screen.render();
  });

  processStatus.append(processTextElem);

  headerBox.append(queriesStatus);
  headerBox.append(processStatus);

  parent.append(headerBox);
}

module.exports = Header;
