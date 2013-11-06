'use strict';

var Status = Backbone.Model.extend({
  defaults : {
    text : 'Hello World'
  }
});

var status = new Status();

setTimeout(function() {
  status.set('text' , 'Koala');
}, 1000);

module.exports = status;
