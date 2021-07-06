'use strict';

class BaseExceptions extends Error {
  constructor({ code = 1000, errMsg = '', status = 400 }) {
    super();
    this.message = errMsg;
    this.code = code;
    this.status = status;
  }
}


module.exports = { BaseExceptions };
