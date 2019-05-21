const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/spotify', { target: 'http://localhost:5000' }));
  app.use(proxy('/api', { target: 'http://localhost:5000' }));
  // app.use(proxy("/api/surveys/thanks", { target: "http://localhost:5000" }));
};
