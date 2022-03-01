const Client = require('./Client');
const Structures = require('./structures/index');

const { Intents, LibInfos } = require('./utils/Constants');
const { version } = require('../package.json');

if (LibInfos.VERSION !== version) {
  throw new Error('The version of the EsmeraldJs is outdated or not compatible with the version of the library. Please update the library.');
}

exports.Client = Client;
exports.Intents = Intents;
exports.LibInfos = LibInfos;

exports.TextChannel = Structures.TextChannel;
exports.RichEmbed = Structures.RichEmbed;
exports.Message = Structures.Message;
exports.User = Structures.User;
