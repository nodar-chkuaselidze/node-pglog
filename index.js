'use strict';
global._ = require('underscore');

//load deps
_.extend(global, {
  'ROOT'     : __dirname,
  'blessed'  : require('blessed'),
  'fs'       : require('fs'),
  'Backbone' : require('./lib/backbone')
});

//load app globals
_.extend(global, {
  'screen'  : blessed.screen(),
  'models'  : require('./models')()
});

//load loadViews
_.extend(global, {
  'modelViews' : require('./modelViews/')()
});

//load views
_.extend(global, {
  'views'      : require('./views/')(),
  'curView'    : new views.Main()
});

//end program keys
screen.key(['C-c', 'q'], function(ch, key) {
  return process.exit(0);
});
