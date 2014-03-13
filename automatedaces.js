var irc = require("irc"), fs = require("fs");
var pjson = require("./package.json");
var config = require("./config");
var bot = new irc.Client(config.server, config.nick, config);
bot.addListener("ctcp-version", function(from, to, message){
	bot.notice(from, "VERSION AutomatedAces " + pjson.version);
});
fs.readdirSync("./aces_modules").forEach(function(file){
	require("./aces_modules/" + file)(bot);
});