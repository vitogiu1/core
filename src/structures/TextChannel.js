const Base = require('./Base');

module.exports = class Channel extends Base {
  constructor(client, data) {
    super(data.id);

    this.client = client;

    this.type = data.type;
    this.id = data.id;
    this.name = data.name;
    this.topic = data.topic;
    this.nsfw = data.nsfw;
    this.guildId = data.guild_id;
    this.lastMessageId = data.last_message_id;
    this.position = data.position;
    this.parentId = data.parent_id;
  }

  createMessage(options) {
    return this.client.createMessage(this.id, options);
  }
};
