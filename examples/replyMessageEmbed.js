const { Client, Intents, RichEmbed } = require('../src/index');

const client = new Client({
  token: 'TOKEN',
  intents: [Intents.GUILDS],
});

client.on('messageCreate', (message) => {
  client.users.fetch('USER_ID').then((user) => {
    const embed = new RichEmbed()
      .setColor(0x00ff00)
      .setTitle('Avatar')
      .setDescription(`Avatar from **${user.username}**`)
      .setImage(user.avatarURL({ dynamic: true }));

    return message.reply({ embeds: [embed] });
  });
});

client.connect();
