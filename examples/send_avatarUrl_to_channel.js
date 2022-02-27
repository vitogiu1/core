const {Client, Intents} = require('esmerald.js');

const client = new Client({
  token: 'TOKEN',
  intents: [Intents.GUILDS],
})

  client.users.fetch('USER_ID').then(user => {
    client.createMessage('CHANNEL_ID', {
      content: user.avatarURL({format: 'png', dynamic: true}),
    });
  });

client.connect();