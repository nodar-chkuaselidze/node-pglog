function Module(name, data) {
  this.name = name;
  this.data = data;

  events.EventEmmiter.call(this);
}

Module.prototype.set = function(name, value) {
}

Module.prototype.get = function(name) {
  return models[this.name][name];
}

module.exports = Module;
