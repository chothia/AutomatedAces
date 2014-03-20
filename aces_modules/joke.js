module.exports = function(bot){
	bot.addListener('message', function(from, to, message){
		if(message.indexOf('AutomatedAces, know any good jokes?') > -1 || message.indexOf('automatedaces good joke please') > -1){
			bot.say(to, 'Knock knock!');
		}else if(message.indexOf('who is there?') > -1 || message.indexOf("who's there?") > -1 || message.indexOf("Who's there?") > -1 || message.indexOf("Who is there?") > -1){
			bot.say(to, "AutomatedAces");
		}else if(message.indexOf('AcesWayUpHigh who?') > -1 || message.indexOf("aceswayuphigh who?") > -1){
	    		bot.say(to, "AcesWayUpHigh the ROBLOX admin! Didn't you even know that?");
		}
	});
};
