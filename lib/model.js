function Model(data) {
  this.data   = data;
  this.events = new events.EventEmitter();
}

Model.prototype.set = function (name, value) {
  if (typeof name === 'object') {
    var key;
    for (key in name) {
      this.set(key, name[key]);
    }
    return this;
  }

  this.data[name] = value;
  this.emit('changed:' + name, value);

  return this;
}

Model.prototype.get = function (name) {
  return this.data[name];
}

Model.prototype.emit = function () {
  this.events.emit.apply(this.events, arguments);
}

Model.prototype.on = function () {
  this.events.on.apply(this.events, arguments);
}

module.exports = Model;
