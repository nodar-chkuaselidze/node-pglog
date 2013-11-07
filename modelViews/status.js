var status = new models.Status();

setTimeout(function() {
  status.set('text' , 'Koala');
}, 1000);

module.exports = status;
