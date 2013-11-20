'use strict';
var Models = require(ROOT + '/lib/models');

var Logs = Backbone.Collection.extend({
  model    : Models.querylog,
  defaults : {
  }
});

module.exports = Logs;
