var blessed = require('blessed'),
    screen  = blessed.screen(),
    header  = require('./header');

screen.key(['C-c'], function(ch, key) {
  return process.exit(0);
});


screen.append(header);
screen.render();
