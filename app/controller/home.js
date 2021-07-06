'use strict';
const BaseController = require('./base');

class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    this.error({ status: 400, errMsg: '报错了哦' });
  }
}

module.exports = HomeController;
