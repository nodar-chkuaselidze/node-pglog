'use strict';
global.models = {};

module.exports = function () {
  var model_names = [];

  fs.readdirSync(__dirname)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (model) {
      model_names.push(model);
      var model_name = model.charAt(0).toUpperCase() + model.substring(1).toLowerCase();

      models[model_name] = require(global.ROOT + model);
    });

  model_names.forEach(function (model) { require('./' + model).done(); });
};
