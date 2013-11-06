'use strict';
global.views = {};

module.exports = (function () {
  var views_dir  = ROOT + '/views';

  fs.readdirSync(__dirname)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (view) {
      var view_name = view.charAt(0).toUpperCase() + view.substring(1).toLowerCase();

      views[view_name] = require(views_dir + '/' + view);
    });

  return views;
}());
