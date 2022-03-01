module.exports.USER = (id) => `/users/${id}`;
module.exports.USER_GUILDS = (id) => `/users/${id}/guilds`;
module.exports.CHANNEL_MESSAGES = (id) => `/channels/${id}/messages`;
module.exports.CHANNEL = (id) => `/channels/${id}`;
module.exports.CHANNEL_MESSAGE = (channelId, messageId) => `/channels/${channelId}/messages/${messageId}`;
