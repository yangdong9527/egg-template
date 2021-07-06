'use strict';
const path = require('path');

exports.notFound = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-notFound'),
};

exports.auth = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-auth'),
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
