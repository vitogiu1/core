const {Client, Intents} = require('esmerald.js');

const client = new Client({
  token: 'TOKEN',
  intents: [Intents.GUILDS],
})

client.connect();