  exports.run = (client) => {
  let config = require('../config.json')
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setPresence({ game: { name: 'On Minehut.com'}, status: 'online' });
}