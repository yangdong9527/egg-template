'use strict';
const Controller = require('egg').Controller;
const { BaseExceptions } = require('../exceptions/http_exceptions');

class BaseController extends Controller {
  success(data) {
    const { ctx } = this;
    ctx.status = 200;
    const result = {
      code: 200,
      errMsg: '操作成功',
    };
    if (data) {
      result.data = data;
    }
    ctx.body = result;
  }

  error({ code = 1000, errMsg = '', status = 400 }) {
    throw new BaseExceptions({ code, errMsg, status });
  }
}

module.exports = BaseController;
