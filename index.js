'use strict';
global._ = require('underscore');

//load deps
_.extend(global, {
  'ROOT'    : __dirname,
  'blessed' : require('blessed'),
  'fs'      : require('fs'),
});

//load structure
_.extend(global, {
  'screen'  : blessed.screen(),
  'models'  : require('./models/'),
  'views'   : require('./views/')
});

global.curView = new views.Main();

screen.key(['C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();
