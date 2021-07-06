'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const bool = ctx.app.router.stack.some(item => {
      return item.regexp.test(ctx.request.url)
    })
    if (bool) {
      await next()
    } else {
      ctx.body = {
        code: 404,
        errMsg: '我可没有写过这个接口,肯定你单词拼错了'
      }
    }
  }
}