'use strict';
global._ = require('underscore');

//load deps
_.extend(global, {
  'ROOT'     : __dirname,
  'nconf'    : require('nconf'),
  'PGDATA'   : '/usr/local/var/postgres',
  '_'        : require('underscore'),
  'blessed'  : require('blessed'),
  'events'   : require('events'),
  'exec'     : require('child_process').exec,
  'util'     : require('util'),
  'fs'       : require('fs'),
});

nconf.argv().env().file({ file : ROOT + '/configs/main.json' });

//load libs
global.Backbone    = require('./lib/backbone');
global.Models      = require('./lib/models')();
global.Collections = require('./lib/collections')();

global.services    = require('./services')();

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
