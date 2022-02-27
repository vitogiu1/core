const Structures = require('../../structures/')

module.exports = function onReady (payload, client) {
  client.user = new Structures.User(payload.d.user)

  client.emit('ready')
}

