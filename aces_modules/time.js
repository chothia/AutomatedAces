module.exports = function(bot){
  bot.addListener('ctcp-time', function(from, to, message){
    bot.notice(from, 'TIME AutomatedAces ' + pjson.time);
});
};
