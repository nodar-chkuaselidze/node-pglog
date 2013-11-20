var exp = {};

exp.size = function (value, inputSize) {
  var sizes = {
    'TB' : 1099511627776,
    'GB' : 1073741824,
    'MB' : 1048576,
    'KB' : 1024,
    'B'  : 1
  };

  if (value < 1) {
    return '0 B';
  }

  if (typeof inputSize !== 'undefined' && sizes[inputSize]) {
    value = value * sizes[inputSize];
  }

  var name, size;
  for (var name in sizes) {
    size = sizes[name];
    if (value > size) {
      return (value / size) + ' ' + name;
    }
  }
}



module.exports = exp;
