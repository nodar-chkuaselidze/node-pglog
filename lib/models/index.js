'use strict';

global.models = {};

module.exports = function () {
  var models_dir = __dirname;

  fs.readdirSync(models_dir)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (model) {
      var model_name = model.charAt(0).toUpperCase() + model.substring(1).toLowerCase();

      models[model_name] = require(models_dir + '/' + model);
    });

  return models;
};
