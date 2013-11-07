'use strict';

global.controllers = {};

module.exports = function () {
  var controllers_dir = ROOT + '/controllers';

  fs.readdirSync(controllers_dir)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (controller) {
      var controller_name = controller.charAt(0).toUpperCase() + controller.substring(1).toLowerCase();

      controllers[controller_name] = require(controllers_dir + '/' + controller);
    });

  return controllers;
};
