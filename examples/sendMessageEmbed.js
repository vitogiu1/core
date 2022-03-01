const { Client, Intents, RichEmbed } = require('esmerald.js');

const client = new Client({
  token: 'TOKEN',
  intents: [Intents.GUILDS],
});

client.users.fetch('USER_ID').then((user) => {
  const embed = new RichEmbed()
    .setColor(0x00ff00)
    .setTitle('Avatar')
    .setDescription(`Avatar from **${user.username}**`)
    .setImage(user.avatarURL({ dynamic: true }));

  return client.createMessage('CHANNEL_ID', { embeds: [embed] });
});

client.connect();
