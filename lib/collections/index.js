'use strict';

global.collections = {};

module.exports = function () {
  var collections_dir = __dirname;

  fs.readdirSync(collections_dir)
    .filter(function (e) { return !~e.indexOf('index.js'); })
    .map(function (e) { return e.split('.')[0]; })
    .forEach(function (collection) {
      var collection_name = collection.charAt(0).toUpperCase() + collection.substring(1).toLowerCase();

      collections[collection_name] = require(collections_dir + '/' + collection);
    });

  return collections;
};
