'use strict';
module.exports = {
  get token() {
    return this.request.header.authorization.replace('Bearer ', '');
  },
};
