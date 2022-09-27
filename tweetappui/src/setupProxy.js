const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://recordinguserservice-env.eba-mrb2nnmb.ap-northeast-1.elasticbeanstalk.com/', // API endpoint 1
      //target: 'http://3.87.108.193:8082',
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      //target: 'http://localhost:8083', // API endpoint 2
      target: 'http://recordingtweetservice-env.eba-39dxbbwp.ap-northeast-1.elasticbeanstalk.com/',
      //target: 'http://34.229.167.216:8083',
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}