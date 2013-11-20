'use strict';
var Models = require(ROOT + '/lib/models');

var Logs = Backbone.Collection.extend({
  model    : Models.Pglog,
  defaults : {
    text : "none"
  }
});

module.exports = Logs;
