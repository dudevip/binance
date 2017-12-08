const fs = require('fs');
const binance = require('node-binance-api');

// Helper Functions:
module.exports = {
  sleep: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  getBinanceClient: function() {
    var {API_KEY, API_SECRET} = JSON.parse(fs.readFileSync('keys.json', "utf8"));

    binance.options({
    	'APIKEY': API_KEY,
    	'APISECRET': API_SECRET
    });

    return binance;
  }
};
