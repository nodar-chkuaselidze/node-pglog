'use strict';

var queryLog = Backbone.Model.extend({
  defaults : {
    dbNmae    : '',
    queryDate : '',
    sessionId : '',
    duration  : '',
    statement : ''
  }
});

module.exports = queryLog;
