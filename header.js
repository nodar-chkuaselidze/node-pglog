var blessed = require('blessed'),
    header  = blessed.element({
      width  : '100%',
      height : 3
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
