'use strict';

var Sessions = Backbone.Model.extend({
  defaults : {
    sessionId     : '',
    queriesCount  : 0,
    totalDuration : 0,
    startDate     : '',
    queries       : {}
  }
});

module.exports = Sessions;
