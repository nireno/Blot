function prettyPrice (cents) {
  var price = '$' + (cents/100).toFixed(2);

  if (price.slice(-2) === '00') price = price.slice(0, -3);

  return price;
}

var is = require('./is')(prettyPrice);

is(2134, '$21.34');
is(2000, '$20');
is(200, '$2');
is(210, '$2.10');
is(03, '$0.03');

module.exports = prettyPrice;