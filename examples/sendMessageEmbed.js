const { Client, Intents } = require('esmerald.js');

const client = new Client({
  token: 'TOKEN',
  intents: [Intents.GUILDS],
})

  const usr = client.users.fetch('USER_ID').then(user => {
    client.createMessageEmbed('CHANNEL_ID', {
        title: 'Avatar',
        description: `Avatar de  **${user.username}**`,
        image: {
          url: user.avatarURL({dynamic: true}),
        },
        color: 0x00ff00,
    });
  });

client.connect();
