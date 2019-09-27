module.exports = function zeros(expression){
  let j= 0;
  let k = 0;
  let multiply = "";
  let number = "";
  let amount = 0;
  let amountNeChet = 0;
  let chet = false;
  let count = 0;
   while (k < expression.length) {
    for (let i = j; i <= expression.length; i++) {
      if (expression[i] != "*" && i < expression.length) {
        multiply += expression[i];
      } else {
        j = i+1;
        k = i+1;
        break;
      }
    }
    number = parseInt(multiply);
    if (number % 2 == 0) chet =true;
    if (multiply.length - (number+"").length == 1) {
    amount += Math.floor(number/25) + Math.floor(number/5);
    } else {
      if (number % 2 == 0) {
        amount += Math.floor(number/50) + Math.floor(number/10);
      } else{
        if (number >= 5) {
        amountNeChet += Math.floor((number+5)/10) + Math.floor((number+25)/50);
        } 
      }
      }
    multiply = "";
    number = "";
  } 
   if (chet) {
     count = amount + amountNeChet;
    } else {
      count = amount;
    }
    return count;
}

