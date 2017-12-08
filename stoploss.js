const commandLineArgs = require('command-line-args');
const { getBinanceClient, sleep } = require('./helpers/helpers.js');

const optionDefinitions = [
  { name: 'quantity', type: Number },
  { name: 'stopLossPrice', type: Number },
  { name: 'pair', type: String }
]
const { pair, quantity, stopLossPrice } = commandLineArgs(optionDefinitions)

const binanceClient = getBinanceClient();

async function stopLoss() {
	var _stopLossTriggered = false;
	while (!_stopLossTriggered) {
		await sleep(300); // a call every two seconds
		console.log("don't sell");
		_stopLossTriggered = await checkIfStopLossTriggered();
	}
	binanceClient.marketSell(pair, quantity);
	console.log(`sold ${quantity} at market price`);
}

stopLoss();

function checkIfStopLossTriggered() {
	return new Promise(resolve => {
		 binanceClient.bookTickers(function(ticker) {
			var _currentTicker = ticker[pair]
			console.log(`Price of ${pair}: `, _currentTicker.bid);
			if(Number(_currentTicker.bid) < Number(stopLossPrice)) {
				resolve(true)
			}
			resolve(false)
		});
	});
}
