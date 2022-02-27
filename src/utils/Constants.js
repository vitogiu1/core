const { version } = require(`${process.cwd()}/package.json`),
UserAgent = `esmerald (https://github.com/esmeraldjs/core ${version})`,
Avatars = [
  'https://cdn.discordapp.com/embed/avatars/0.png',
  'https://cdn.discordapp.com/embed/avatars/1.png',
  'https://cdn.discordapp.com/embed/avatars/2.png',
  'https://cdn.discordapp.com/embed/avatars/3.png',
  'https://cdn.discordapp.com/embed/avatars/4.png'
],
LibInfos = {
  VERSION: '0.1.0',
  NAME: 'esmerald',
  DESCRIPTION: 'A discord bot written in esmerald',
},
Intents = {
  GUILDS: 1 << 0,
  GUILD_MEMBERS: 1 << 1,
  GUILD_BANS: 1 << 2,
  GUILD_EMOJIS_AND_STICKERS: 1 << 3,
  GUILD_INTEGRATIONS: 1 << 4,
  GUILD_WEBHOOKS: 1 << 5,
  GUILD_INVITES: 1 << 6,
  GUILD_VOICE_STATES: 1 << 7,
  GUILD_PRESENCES: 1 << 8,
  GUILD_MESSAGES: 1 << 9,
  GUILD_MESSAGE_REACTIONS: 1 << 10,
  GUILD_MESSAGE_TYPING: 1 << 11,
  DIRECT_MESSAGES: 1 << 12,
  DIRECT_MESSAGE_REACTIONS: 1 << 13,
  DIRECT_MESSAGE_TYPING: 1 << 14
},
Codes = {
  DISPATCH: 0,
  HEARTBEAT: 1,
  IDENTIFY: 2,
  STATUS_UPDATE: 3,
  VOICE_STATE_UPDATE: 4,
  VOICE_GUILD_PING: 5,
  RESUME: 6,
  RECONNECT: 7,
  REQUEST_GUILD_MEMBERS: 8,
  INVALID_SESSION: 9,
  HELLO: 10,
  HEARTBEAT_ACK: 11
};

module.exports = {
  UserAgent,
  Avatars,
  Intents,
  Codes,
  LibInfos
}
