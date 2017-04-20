/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 5500;

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');
var config = require('./config.json');

// The Express app
var app = express();

// Serve files from public folder
app.use(express.static('public'));

// Set up authentication
var authCAS = require('auth-cas');
var auth = new authCAS(config.host, config.casHost);

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
