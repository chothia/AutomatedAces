var irc = require('irc');
var config = {
        server: 'irc.freenode.net',
        nick: 'AutomatedAces',
        password: null,
        userName: 'AutomatedAces',
        realName: 'AutomatedAces bot by AcesWayUpHigh',
        port: 6667,
        debug: false,
        showErrors: false,
        autoRejoin: true,
        autoConnect: true,
        channels: ['#roblox-web'],
        retryCount: null,
        retryDelay: 2000,
        secure: false,
        selfSigned: false,
        certExpired: false,
        floodProtection: false,
        floodProtectionDelay: 1000,
        sasl: false,
        stripColors: false,
        channelPrefixes: "&#",
        messageSplit: 512
};
var bot = new irc.Client(config.server, config.nick, {
	channels: config.channels
});

bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('AutomatedAces, do you know any good jokes?') > -1
      || message.indexOf('automatedaces know good joke?') > -1
    ) {
        bot.say(to, 'Knock knock!');
    }
    if(  message.indexOf('AutomatedAces, more jokes please!') > -1
      || message.indexOf('automatedaces more jokes') > -1
    ) {
        bot.say(to, 'Why did the chicken cross the road?');
    }
});

bot.addListener('message', function(from, to, message) {
  if(  message.indexOf("I don't know") > -1
    || message.indexOf("i don't know") > -1
    || message.indexOf('err I dunno') > -1
  ) {
      bot.say(to, 'Because the chicken wanted to get himself killed!');
  }
}

bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('who is there?') > -1
      || message.indexOf("who's there?") > -1
      || message.indexOf("Who's there?") > -1
      || message.indexOf("Who is there?") > -1
      )
    {
        bot.say(to, 'AcesWayUpHigh');
    }
});
bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('AcesWayUpHigh who?') > -1
      || message.indexOf("aceswayuphigh who?") > -1
     )
    {
        bot.say(to, "AcesWayUpHigh the ROBLOX admin!");
    }
});
