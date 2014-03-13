var irc = require("irc");
var aces = {
	version: "0.0.1"
};
var config = require("./config");
var bot = new irc.Client(config.server, config.nick, {
	channels: config.channels
});
bot.addListener("pm", function(from, text, message){
	
});
bot.addListener("ctcp-version", function(from, to, message){
	bot.notice(from, "VERSION AutomatedAces " + aces.version);
});