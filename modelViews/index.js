'use strict';

global.modelViews = {};

module.exports = function () {
  var modelViews_dir = ROOT + '/modelViews';

  fs.readdirSync(modelViews_dir)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (controller) {
      var controller_name = controller.charAt(0).toUpperCase() + controller.substring(1).toLowerCase();

      modelViews[controller_name] = require(modelViews_dir + '/' + controller);
    });

  return modelViews;
};
