'use strict';
global.views = {};

module.exports = function () {
  var view_names = [];

  fs.readdirSync(__dirname)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (view) {
      view_names.push(view);
      var view_name = view.charAt(0).toUpperCase() + view.substring(1).toLowerCase();

      views[view_name] = require(global.ROOT + view);
    });

  view_names.forEach(function (view) { require('./' + view).done(); });
};
