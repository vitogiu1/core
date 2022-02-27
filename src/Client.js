const { EventEmitter } = require('events'),

WebSocketHandler = require('./gateway/WebSocketHandler'),
GatewayIntents = require('./gateway/GatewayIntents'),
Users = require("./gateway/Users"),
RequestHandler = require('./api-rest/RequestHandler'),
Endpoints = require('./api-rest/Endpoints'),
Structures = require('./structures');

module.exports = class Client extends EventEmitter {
  constructor (options) {
    super()

    this.requestHandler = new RequestHandler(options.token)
    this.ws = new WebSocketHandler(this, options.token, GatewayIntents.resolve(options.intents))
    this.ready = null
    this.users = new Users(this, options.token)
  }

  connect () {
    this.ws.connect()
    this.ready = Date.now()
  }

  createMessage (channelId, options) {
    return this.requestHandler.request(Endpoints.CHANNEL_MESSAGES(channelId), {
      method: 'POST',
      body: options
    })
  }

  createMessageEmbed(channelId, options) {
    return this.requestHandler.request(Endpoints.CHANNEL_MESSAGES(channelId), {
      method: 'POST',
      body: {
        embed: options
      }
    })
  }

  get uptime () {
    return Date.now() - this.ready
  }

}
