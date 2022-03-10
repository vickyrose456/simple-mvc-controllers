/*
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = process.env.PORT || process.env.NODE_PORT || 3000;

// can add anything to this folder and express will handle them automatically
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));

// when we send data, we have to pay for network bandwith
/**
 * this uses the compression library (common)... can be used as a middlewear
 * it will compress any data w/o seeing any noticible
 * Effectively making website more available w/o extra cost
 
app.use(compression());

// body parser -> Get or post request -> we had to handle it manually
// if it sees a request, it will re-assemble it automatically
// extended true just chamges the library
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

// serve favicon library -> it will handle the request for favicon
app.use(favicon(`${__dirname}/..client/img/favicon.png`));

// cookie parser
// app.use(cookieParser());

router(app);
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});
*/

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

// Import our "router" function from our router.js file.
const router = require('./router.js');

// Setup our port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Using express, create our logical "app". Remember, this is the encapsulated version of our server.
const app = express();

app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));

app.use(compression());

app.use(bodyParser.urlencoded({extended: true}));


app.use(favicon(`${__dirname}/../client/img/favicon.png`));

router(app);

app.listen(port, (err) => {
    if(err) { throw err; }
    console.log(`Listening on port ${port}`);
})
