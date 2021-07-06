'use strict';
const path = require('path');

exports.notFound = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-notFound'),
};
