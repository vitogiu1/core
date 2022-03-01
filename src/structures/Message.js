/* eslint-disable no-unused-vars */
const Client = require('../Client');
const User = require('./User');
const Base = require('./Base');
const TextChannel = require('./TextChannel');
const Endpoints = require('../api-rest/Endpoints');

module.exports = class Message extends Base {
  constructor(client, data) {
    super(data.id);

    /**
     * @type {Client} client
     */
    this.client = client;
    this.data = data;

    this.content = data.content;
    this.id = data.id;
    this.guildId = data.guild_id;
    this.channelId = data.channel_id;
    this.author = new User(this.client, data.author);
    this.attachments = data.attachments;
  }

  reply(options) {
    return this.client.createMessage(this.channelId, {
      ...options,
      message_reference: {
        message_id: this.id,
        channel_id: this.channelId,
      },
    });
  }
};
