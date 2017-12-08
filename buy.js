const commandLineArgs = require('command-line-args');
const { getBinanceClient } = require('./helpers/helpers.js');

const optionDefinitions = [
  { name: 'quantity', type: Number },
  { name: 'price', type: Number },
  { name: 'pair', type: String }
]
const options = commandLineArgs(optionDefinitions)

const binanceClient = getBinanceClient();
binanceClient.buy(options.pair, options.quantity, options.price);
