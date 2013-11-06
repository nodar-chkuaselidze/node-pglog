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
  this.emit('changed', name, value);

  return this;
};

Model.prototype.get = function (name) {
  return this.data[name];
};

Model.prototype.remove = function(name) {
  this.data[name] = null;
  this.emit('removed:' + name, value);
  this.emit('removed', name, value);
}

Model.prototype.emit = function () {
  this.events.emit.apply(this.events, arguments);
};

Model.prototype.on = function () {
  this.events.on.apply(this.events, arguments);
};

function List() {
  this.list   = [];
  this.events = new events.EventEmitter();
}

Model.prototype.set = function(list, options) {
  if (!(list instanceof Array)) {
    return;
  }

  if (typeof options !== 'object') {
    options = {};
  }

  if (options.add) {
    this.list = this.list.concat(list);
    this.emit('added');
  } else {
    this.list = list;
  }

  this.emit('changed');
};

Model.prototype.get = function(index) {
  return this.list[index];
};

Model.prototype.push = function (list) {
  if (list instanceof Array) {
  }
}

module.exports = Model;
