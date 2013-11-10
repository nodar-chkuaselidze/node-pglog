'use strict';

var Process = Backbone.Model.extend({
  defaults : {
    CPU : '0',
    MEM : '0'
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
