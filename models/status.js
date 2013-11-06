'use strict';

var status = new Model({
  text : "Hello World ?"
});

setTimeout(function() {
  status.set({'text' : 'Kutu'});
}, 1000);

module.exports = status;
