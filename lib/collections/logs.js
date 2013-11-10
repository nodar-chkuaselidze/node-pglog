'use strict';

var Logs = Backbone.Collection.extend({
  model    : Models.Pglog,
  defaults : {
    text : "none"
  }
});

module.exports = Logs;
