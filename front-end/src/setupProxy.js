const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/naver', {
      target: 'https://nid.naver.com/oauth2.0/token',
      pathRewrite: {
        '^/naver':''
      },
      changeOrigin: true
    })
  )
  
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
