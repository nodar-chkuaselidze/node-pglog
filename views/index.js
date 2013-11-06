'use strict';
global.views          = {};
global.views.partials = {};

module.exports = function () {
  var views_dir  = ROOT + '/views',
    partials_dir = views_dir + '/partials'


  fs.readdirSync(views_dir)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .filter(function (e) { return !~e.indexOf('partials'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (view) {
      var view_name = view.charAt(0).toUpperCase() + view.substring(1).toLowerCase();

      views[view_name] = require(views_dir + '/' + view);
    });
  
  fs.readdirSync(partials_dir)
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (partial) {
      var partial_name = partial.charAt(0).toUpperCase() + partial.substring(1).toLowerCase();

      views.partials[partial_name] = require(partials_dir + '/' + partial);
    })

  return global.views;
};
