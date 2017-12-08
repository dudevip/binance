# How to use
## Prerequisites:
### Install NodeJs
For both systems:
- Install latest version of node, Follow the instructions here: https://nodejs.org/es/download/.
- Download the code and unzip it wherever you prefer (or use git if you are familiar with it).

### Get your api keys in binance:
- Follow these instructions: https://coinigy.freshdesk.com/support/solutions/articles/1000256048-how-do-i-find-my-api-key-on-binance-com
- Recommendation: *NEVER* allow withdrawal through you API keys unless you know what you are doing.

--------

## Instructions for Mac:
- Open the terminal (instructions: https://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/)
- Navigate to the folder you just unzipped.
- run "npm install" <-- this will install all the dependencies.

## Instruction for PC:
- Open Powershell. (https://blogs.technet.microsoft.com/shawnt/2007/12/17/how-to-use-the-powershell-1-0-a-beginners-guide/)
- Navigate to the folder you just unzipped.
- run "npm install" <-- this will install all the dependencies.

---------

# Using the tool
## Preparation:

Open the file _keys.json_ and add your api key and secret.

## Actions
These commands must be called from the terminal/powershell on the project directory.


## Buy
This function triggers a bid on the specified
```sh
$ node buy.js --pair <pair> --price <price> --quantity <quantity>
```

*Example:* Set a bid for 10 eth at bid price 0.00001
```sh
$ node buy.js --pair ETHBTC --price 0.00001 --quantity 10
```

## Set a StopLoss:

This function checks the current bid price for a certain crypto pair and when the price goes bellow your stop loss, it triggers a market sell of the quantity you set for that coin.

*IMPORTANT* this code must be running constantly to work. Since Binance does not have stop loss by default, this code is constantly checking the price and triggers a MARKET SELL when the stop loss is triggered.


```sh
$ node stoploss.js --pair <pair> --quantity <quantityToSell> --stopLossPrice <stopLoss>

```

*Example:* Set a stop loss for eth/btc to sell 10 ETH at market price when the it hits the stop loss price of 0.1
```sh
$ node stoploss.js --pair ETHBTC --quantity 10 --stopLossPrice 0.1
```
