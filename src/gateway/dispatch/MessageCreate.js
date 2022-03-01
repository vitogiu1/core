/* eslint-disable no-param-reassign */
const Structures = require('../../structures');

module.exports = function onMessageCreate(payload, client) {
  client.emit('messageCreate', new Structures.Message(client, payload.d));
};
