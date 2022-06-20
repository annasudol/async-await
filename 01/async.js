const fetch = require('node-fetch');

async function getCryptoPrice(coin) {
  const url = `https://api.coindesk.com/v1/${coin}/currentprice.json`;
  const response = await fetch(url);
  const priceData = await response.json();
  const price = priceData.bpi.USD.rate;
  const name = priceData.chartName;
  console.log(`${name} price is ${price} USD`);
}

getCryptoPrice('bpi');
