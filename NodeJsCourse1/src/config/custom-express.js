const expressInstance = require('express');
const app             = expressInstance();

// Import the routes required by the application
require('../app/rotas/rotas.js');

// Export the app object to allow use by
// underlining Node modules.
module.exports = app;