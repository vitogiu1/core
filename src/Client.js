const { EventEmitter } = require('events');

const WebSocketHandler = require('./gateway/WebSocketHandler');
const GatewayIntents = require('./gateway/GatewayIntents');
const RequestHandler = require('./api-rest/RequestHandler');
const Endpoints = require('./api-rest/Endpoints');

const { Message } = require('./structures/index');
const { Channels, Users } = require('./gateway/managers/index');

/**
 * @class
 * @extends {EventEmitter}
 */
module.exports = class Client extends EventEmitter {
  /**
   *
   * @param {object[]} options
   */
  constructor(options) {
    super();

    /**
     * @type {RequestHandler}
     */
    this.requestHandler = new RequestHandler(options.token);

    /**
     * @type {WebSocketHandler}
     */
    this.ws = new WebSocketHandler(this, options.token, GatewayIntents.resolve(options.intents));

    /**
     * @type {null|Date}
     */
    this.ready = null;

    this.channels = new Channels(this);
    this.users = new Users(this);
  }

  /**
   * @type {?number}
   * @readonly
   */
  get uptime() {
    return Date.now() - this.ready;
  }

  /**
   * @returns {Promise<void>}
   */
  connect() {
    this.ws.connect();
    this.ready = Date.now();
  }

  /**
   * @param {string} channelId
   * @param {Object[]} options
   * @returns {Message}
   */
  createMessage(channelId, options) {
    return this.requestHandler
      .request(Endpoints.CHANNEL_MESSAGES(channelId), {
        method: 'POST',
        body: options,
      })
      .then((message) => new Message(this, message));
  }
};
