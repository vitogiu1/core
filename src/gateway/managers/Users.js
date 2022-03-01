const Endpoints = require('../../api-rest/Endpoints');
const User = require('../../structures/User');

module.exports = class Users {
  constructor(client) {
    this.client = client;
  }

  fetch(userId) {
    return this.client.requestHandler
      .request(Endpoints.USER(userId))
      .then((user) => new User(this.client, user));
  }
};
