'use strict';

var Process = Backbone.Model.extend({
  defaults : {
    '%CPU'    : '0',
    'TIME'    : '0:00.0',
    '%MEM'    : '0',
    'VSZ'     : '0',
    'RSS'     : '0',
    'RUSER'   : 'undefined',
    'ELAPSED' : '_',
    'STARTED' : '_'
  }
});

var Status = Backbone.Model.extend({
  defaults : {
  },

  initialize : function() {
    this.set('pgProcess', new Process());
  }
});

module.exports = Status;
