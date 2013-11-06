'use strict';
function Header(parent) {
  var 
    status = models.Status,
    headerBox = blessed.Element({
      width  : '100%',
      height : 7,
      content: status.get('text'),
      style  : {
        bg : '#111',
        fg : '#fff'
      }
    });

  status.on('changed:text', function(text) {
    headerBox.content = text;
    screen.render();
  });
  parent.append(headerBox);
}

module.exports = Header;
