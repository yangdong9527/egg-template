/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1625552076088_3275';

  // add your middleware config here
  config.middleware = [ 'handleError', 'httpLog' ];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.httpLog = {
    fileName: 'httpLog.log',
  };

  config.auth = {
    exclude: [ '/test' ],
  };

  config.jwt = {
    secret: 'ydzhenhaokan',
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'blog',
    timezone: '+08:00',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    define: {
      freezeTableName: true, // 强制表名称 等于模型名称
      timestamps: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
