const fetch = require('node-fetch');

function getCryptoPrice(coin) {
  const url = `https://api.coindesk.com/v1/${coin}/currentprice.json`;
  fetch(url)
    .then((response) => response.json())
    .then((priceData) => {
      const price = priceData.bpi.USD.rate;
      const name = priceData.chartName;
      console.log(`${name} price is ${price} USD`);
    })
    .catch((err) => console.error(`Error: ${err.message}`));
}

getCryptoPrice('bpi');
