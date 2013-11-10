'use strict';

module.exports = {
  models : {
    Status   : new Models.Status(),
    Sessions : new Models.Sessions()
  },
  collections : {
    Logs   : new Collections.Logs()
  }
};
