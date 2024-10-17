/* get crypto live price from binance using websocket */
let wss = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let priceElement = document.getElementById('btc-price');
let priceElement2 = document.getElementById('btc-price-2');

let wsEth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let priceElementEth = document.getElementById('eth-price');
let priceElementEth2 = document.getElementById('eth-price-2');

let wsLtc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
let priceElementLtc = document.getElementById('ltc-price');
let priceElementLtc2 = document.getElementById('ltc-price-2');

let wsSol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let priceElementSol = document.getElementById('sol-price');
let priceElementSol2 = document.getElementById('sol-price-2');

wss.onmessage = (data) => {
 let priceObject = JSON.parse(data.data);
 price = parseFloat(priceObject.p).toFixed(2); 
 roundPrice = price;
 priceElement.innerText = price;
 priceElement2.innerText = price;
 
};

wsEth.onmessage = (data) => {
    let priceObject = JSON.parse(data.data);
    // round the price to 2 decimal places
    price = parseFloat(priceObject.p).toFixed(2);
    priceElementEth.innerText = price;
    priceElementEth2.innerText = price;
    
   };

   wsLtc.onmessage = (data) => {
    let priceObject = JSON.parse(data.data);
    // round the price to 2 decimal places
    price = parseFloat(priceObject.p).toFixed(2);
    priceElementLtc.innerText = price;
    priceElementLtc2.innerText = price;
   };

wsSol.onmessage = (data) => {
let priceObject = JSON.parse(data.data);
   // round the price to 2 decimal places
   price = parseFloat(priceObject.p).toFixed(2);
   priceElementSol.innerText = price;
   priceElementSol2.innerText = price;
  };

