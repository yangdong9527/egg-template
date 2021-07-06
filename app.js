'use strict';

module.exports = app => {
  app.config.coreMiddleware.unshift('auth');
  app.config.coreMiddleware.unshift('notFound');
};
