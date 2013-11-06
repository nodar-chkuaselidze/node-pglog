var blessed = require('blessed'),
    body    = blessed.element({
      width  : '100%',
      height : 1
      style  : {
      }
    }),
    headerLeft = blessed.element({
      left  : 0,
      width : '50%',
      height : '100%',
    }), 
    headerRight = blessed.element({
      right : 0,
      width : '50%',
      height : '100%'
    });

header.append(headerLeft);
header.append(headerRight);

module.exports = header;
