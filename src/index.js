const Client = require('./Client'),
Structures = require('./structures/'),
{ Intents, LibInfos } = require('./utils/Constants');

if(LibInfos.VERSION !== require('../package.json').version) {
throw new Error('The version of the EsmeraldJs is outdated or not compatible with the version of the library. Please update the library.');
}

module.exports = {
  Client,
  Structures,
  Intents,
  LibInfos
}
