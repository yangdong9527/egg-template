'use strict';
const { BaseExceptions } = require('../exceptions/http_exceptions');

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      // 全局统一 错误处理
      let status = error.status || 500;
      const result = {};
      if (error instanceof BaseExceptions) {
        result.errMsg = error.message;
        result.code = error.code;
        status = error.status;
      } else {
        if (status === 422) {
          result.errMsg = '参数校验失败';
          result.code = 1000;
        } else {
          result.errMsg = ctx.app.config.env === 'prod' ? '我靠,有BUG 快跑' : error.message;
          result.code = 1000;
        }
      }
      ctx.body = result;
      ctx.status = status;
    }
  };
};
