const fetch = require('node-fetch');

async function getCryptoPrice(coin) {
  const url = `https://api.coindesk.com/v1/${coin}/currentprice.jso`;
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}

getCryptoPrice('bpi')
  .then((priceData) => {
    const price = priceData.bpi.USD.rate;
    const name = priceData.chartName;
    console.log(`${name} price is ${price} USD`);
  })
  .catch((err) => console.error(`Error: ${err.message}`));
