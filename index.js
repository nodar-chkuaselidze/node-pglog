'use strict';
global._ = require('underscore');

//load deps
_.extend(global, {
  'ROOT'     : __dirname,
  'blessed'  : require('blessed'),
  'util'     : require('util'),
  'fs'       : require('fs'),
});

//load libs
global.Backbone    = require('./lib/backbone');
global.Models      = require('./lib/models')();
global.Collections = require('./lib/collections')();

//load app globals
global.models      = require('./lib/modelInstances').models;
global.collections = require('./lib/modelInstances').collections;
global.controllers = require('./controllers')();

//load views
global.screen  = blessed.screen();
global.views   = require('./views/')();
global.curView = new views.Main();

//end program keys
screen.key(['C-c', 'q'], function(ch, key) {
  return process.exit(0);
});
