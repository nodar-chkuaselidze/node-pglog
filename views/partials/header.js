'use strict';
function Header(parent) {
  var headerBox = blessed.Element({
    width  : '100%',
    height : 7,
    style  : {
      bg : '#111',
      fg : '#000'
    }
  });

  parent.append(headerBox);
}

module.exports = Header;
