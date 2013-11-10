'use strict';

global.services = {};

module.exports = function () {
  var services_dir = ROOT + '/services';

  fs.readdirSync(services_dir)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (service) {
      var service_name = service.charAt(0).toUpperCase() + service.substring(1).toLowerCase();

      services[service_name] = require(services_dir + '/' + service);
    });

  return services;
};
