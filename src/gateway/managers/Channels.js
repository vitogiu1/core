const Endpoints = require('../../api-rest/Endpoints');
const TextChannel = require('../../structures/TextChannel');

module.exports = class Channels {
  constructor(client) {
    this.client = client;
  }

  fetch(channelId) {
    return this.client.requestHandler
      .request(Endpoints.CHANNEL(channelId))
      .then((channel) => new TextChannel(this.client, channel));
  }
};
