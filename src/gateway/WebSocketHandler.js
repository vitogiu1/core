const WebSocket = require('ws')
const dispatches = require('./dispatch/')
const { Codes } = require('../utils/Constants')

module.exports = class WebSocketHandler {
  constructor (client, token, intents) {
    this._client = client
    this._token = token
    this._intents = intents
    this._gateway = 'wss://gateway.discord.gg/?v=9&encoding=json'
    this._lastHeartbeat = null
    this._interval = null
    this.ping = null
    this.connection = null
  }

  connect () {
    this.connection = new WebSocket(this._gateway)

    this.connection.on('open', () => this.identify())
    this.connection.on('message', payload => {
      payload = JSON.parse(payload.toString())

      switch (payload.op) {
        case Codes.DISPATCH:
          dispatches[payload.t]?.(payload, this._client)
          this._client.emit('raw', payload)
          break

        case Codes.HELLO:
          this.heartbeat(payload.d.heartbeat_interval)
          break

        case Codes.HEARTBEAT_ACK:
          this.ping = Date.now() - this._lastHeartbeat
          break
      }
    })
  }

  disconnect (options) {
    if (this._interval) {
      clearInterval(this._interval)
      this._interval = null
    }

    this.connection = null

    this._client.emit('disconnect')

    if (options.reconnect) {
      this.connect()
    }
  }

  heartbeat (interval) {
    this.connection.send(JSON.stringify({
      op: Codes.HEARTBEAT,
      d: null
    }))

    this._lastHeartbeat = Date.now()

    this._interval = setInterval(() => {
      this.heartbeat(interval)
    }, interval)
  }

  identify () {
    return this.connection.send(JSON.stringify({
      op: Codes.IDENTIFY,
      d: {
        token: this._token,
        intents: this._intents,
        properties: {
          $os: process.platform.toString(),
          $browser: 'esmeraldjs',
          $device: 'esmeraldjs'
        }
      }
    }))
  }
}
