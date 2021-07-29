const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.get(createProxyMiddleware('/blogs', { target: 'http://localhost:8000' }));
  app.use(createProxyMiddleware('/api/email', { target: 'http://localhost:5000' }))
}