var fun = {
  pow: function(a, z) {
  var resalt = a;
  if ( (a == 0) && (z <= 0) ) {
  console.log('is not defined');
  } else {
  if (z == 0) {
    return (1);
    console.log(1);
  } else {
    for (var i = 1; i < Math.abs(z); i++) {
      resalt *= a;
    }
    if (z  > 0) {
        return (resalt);
        console.log(resalt);
    }
    if (z  < 0) {
    return (resalt);
    console.log(1 / resalt);
    }
    }
  }
}
};

// var n = prompt ('enter number');
// var exp = prompt ('enter exp');
// fun.pow(n, exp);

module.exports = fun;
