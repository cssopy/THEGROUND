const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/token", {
      target: "https://nid.naver.com/oauth2.0",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/back", {
      target: "https://j7d109.p.ssafy.io/back",
      changeOrigin: true,
    })
  );

  // app.use(
  //   createProxyMiddleware('/다른context', {
  //     target: 'https://다른호스트',
  //     pathRewrite: {
  //       '^/지우려는패스':''
  //     },
  //     changeOrigin: true
  //   })
  // )
};
