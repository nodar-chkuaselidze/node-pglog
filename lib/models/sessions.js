'use strict';
var Logs = require(ROOT + '/lib/collections/logs');

var Sessions = Backbone.Model.extend({
  defaults : {
    sessionId     : '',
    queriesCount  : 0,
    totalDuration : 0,
    startDate     : '',
    queries       : {}
  },

  initialize : function() {
    this.set('queries', new Logs());
  }
});

module.exports = Sessions;
