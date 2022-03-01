/* eslint-disable no-param-reassign */
const Structures = require('../../structures');

module.exports = function onReady(payload, client) {
  client.user = new Structures.User(client, payload.d.user);
  client.emit('ready');
};
