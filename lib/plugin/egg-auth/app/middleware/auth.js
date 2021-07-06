'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const exclude = options.exclude;
    const url = ctx.request.url;
    const pass = exclude.some(item => {
      return item === url;
    });
    if (pass) {
      await next();
    } else {
      try {
        const tokenInfo = ctx.app.jwt.verify(ctx.token, ctx.app.config.jwt.secret);
        ctx.tokenInfo = tokenInfo;
        await next();
      } catch (error) {
        if (error.message === 'jwt expired') {
          ctx.body = {
            code: 1001,
            errMsg: '你的这个token过期了,麻烦你重新登录下',
          };
          ctx.status = 401;
          return;
        }
        ctx.body = {
          code: 401,
          errMsg: 'token错误,或者你还没有登录',
        };
        ctx.status = 401;
        return;
      }
    }
  };
};
