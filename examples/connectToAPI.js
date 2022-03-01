/* eslint-disable import/no-unresolved */
const { Client, Intents } = require('../src/index');

const client = new Client({
  token: 'TOKEN',
  intents: [Intents.GUILDS],
});

client.connect();
