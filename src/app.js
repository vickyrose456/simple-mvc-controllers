const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

