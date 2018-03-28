// variables to hold the data from API and manipulate the DOM
var coinUsd, codeUsd, coinEur, codeEur, coinGbp, codeGbp;
var usd = document.getElementById('usd');
var gbp = document.getElementById('gbp');
var eur = document.getElementById('eur');
var price = document.getElementById('price');
var currency = 'USD';

// Click events for setting the current currency and executing the API call on a click
usd.addEventListener('click', function() {
  currentCoin = 'USD';
  usd.classList.add('currentInput');
  gbp.classList.remove('currentInput');
  eur.classList.remove('currentInput');
  getCoin('USD');
});

gbp.addEventListener('click', function() {
  currentCoin = 'GBP';
  gbp.classList.add('currentInput');
  usd.classList.remove('currentInput');
  eur.classList.remove('currentInput');
  getCoin('GBP');
});

eur.addEventListener('click', function() {
  currentCoin = 'EUR';
  eur.classList.add('currentInput');
  gbp.classList.remove('currentInput');
  usd.classList.remove('currentInput');
  getCoin('EUR');
});

// API call to fetch the data
function getCoin(currency) {
  var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var coin = data.bpi;
      codeUsd = coin.USD.code;
      coinUsd = coin.USD.rate.split('.')[0];

      codeGbp = coin.GBP.code;
      coinGbp = coin.GBP.rate.split('.')[0];

      codeEur = coin.EUR.code;
      coinEur = coin.EUR.rate.split('.')[0];

      if (currency === 'EUR') {
        price.textContent = coinEur + ' ' + codeEur;
      } else if (currency === 'GBP') {
        price.textContent = coinGbp + ' ' + codeGbp;
      } else {
        price.textContent = coinUsd + ' ' + codeUsd;
      }
    });
}

getCoin(currency);
