const RequestHandler = require('../api-rest/RequestHandler'),
      Endpoints = require('../api-rest/Endpoints'),
      Structures = require('../structures');


module.exports = class Users {
    constructor(client, token) {
        this._client = client;
        this.requestHandler = new RequestHandler(token)
    }

    fetch(userId) {
    return this.requestHandler.request(Endpoints.USER(userId)).then(user =>
        new Structures.User(user))
    }
}

