const controllers = require('./controllers');

// handle what url's go to which handler fns
const router = (app) => {
  // GET request handler
  app.get('/', controllers.index);
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/getName', controllers.getName);

  // express will check for any other url w/ this code
  app.get('/*', controllers.notFound);

  // handle post request if the user wants to set the name
  app.post('/setName', controllers.setName);
};

module.exports = router;
