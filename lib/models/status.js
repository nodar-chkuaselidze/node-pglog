'use strict';

var Process = Backbone.Model.extend({
  defaults : {
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
