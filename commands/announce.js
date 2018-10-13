exports.run = async (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  const channel = msg.member.guild.channels.find(ch => ch.name === 'announcments');
  const embed = new RichEmbed()
  .setTitle('Announcment')
  .setDescription(args)
  .setColor(0x000000)
  .setFooter('Provided By Minehut Bot');
  
  channel.send(embed);
}