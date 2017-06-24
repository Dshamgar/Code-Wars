// Challenge: You are asked to square every digit of a number.
// 
// For example, if we run 9119 through the function, 811181 will come out.
// 
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  //may the code be with you
  var outStr = "";
  var numStr =  num.toString();
  for (i=0; i<numStr.length; i++) {
    outStr = outStr + numStr[i]*numStr[i];
  }
  return parseInt(outStr);
}
