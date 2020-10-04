let checkNumber = +prompt('Enter money', '');
while(!isAppropriateValue(checkNumber)){
	alert('Invalid input message');
    checkNumber = +prompt('Enter money', '');
}

let percent = +prompt('Enter percent', '');

while(!isAppropriateValue(percent)||percent>100){
	alert('Invalid input message');
    percent = +prompt('Enter percent', '');
}

let tipAmount = checkNumber / 100 * percent;
let totalSum = checkNumber + tipAmount;


alert('Check number: ' + checkNumber + '\n Tip: ' + percent + '% \n Tip amount: ' 
	+ tipAmount.toFixed(2) + '\n Total sum to pay: ' + totalSum.toFixed(2));

function isAppropriateValue(value){
  if(value === undefined || value === null || value === '' || value < 0 || isNaN(value)){
    return false;
  }
  return true;
}

 