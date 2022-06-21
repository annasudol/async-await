const fetch = require('node-fetch');

async function getCryptoPrice(coin) {
  const url = `https://api.coingecko.com/api/v3/coins/${coin}`;
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}

function dipsplayPrice(data) {
  const price = data.bpi.USD.rate;
  const name = data.chartName;
  console.log(`${name} price is ${price} USD`);
}

async function showPrice() {
  try {
    const priceDataBTC = await getCryptoPrice('bitcoin');
    // const priceDataETH = await getCryptoPrice('eth');
    console.log(priceDataBTC, 'priceDataBTC');
    // dipsplayPrice(priceDataBTC);
    // dipsplayPrice(priceDataETH);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

showPrice();
