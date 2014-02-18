var irc = require('irc');
var config = require('./config');
var client = new irc.Client('', '', config);