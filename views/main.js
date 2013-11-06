'use strict';
function Main() {
  var
    mainBox = blessed.Element({
      width : '100%',
      height: '100%'
    }),
    header = new views.partials.Header(mainBox);

  screen.append(mainBox);
  screen.render();
}

module.exports = Main;
