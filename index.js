'use strict';
var blessed = require('blessed'),
    screen  = blessed.screen(),
    models  = require('./models/'),
    views   = require('./views/');

global.screen = screen;
global.ROOT   = __dirname;

screen.key(['C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();
