const { Avatars } = require('../utils/Constants');
const Base = require('./Base');

module.exports = class User extends Base {
  constructor(client, data) {
    super(data.id);

    this.id = data.id;
    this.username = data.username;
    this.discriminator = data.discriminator;

    this.bot = data.bot ?? false;
    this.flags = data.flags;
    this.avatar = data.avatar;

    this.verified = data.verified;
    this.banner = data.banner;
    this.accentColor = data.accent_color;
  }

  avatarURL(options) {
    if (this.avatar) {
      return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${options?.format || 'png'}?size=${options?.size || '1024'}`;
    }

    return this.defaultAvatar;
  }

  bannerURL(options) {
    return `https://cdn.discordapp.com/banners/${this.id}/${this.banner}.${options?.format || 'png'}?size=${options?.size || '1024'}`;
  }

  get mention() {
    return `<@${this.id}>`;
  }

  get tag() {
    return `${this.username}#${this.discriminator}`;
  }

  get defaultAvatar() {
    return Avatars[this.discrim % 5];
  }
};
