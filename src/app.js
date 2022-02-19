/* Now that we are using Express.js (https://expressjs.com/) our server is now abstracted
   into an "application" or "app". This app is an encapsulation of all the server code that
   we are writing, and it allows express to do a ton of work for us. app.js is essentially
   the new version of our older server.js. This file is largely responsible for all the
   initial setup that way other files can worry about the handling of requests, etc.
*/

// Import our libraries
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

