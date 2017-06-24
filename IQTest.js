//
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// 
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
// 
// ##Examples :
// 
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// 
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  // ...
  var evens = 0;
  var odds = 0;
  var lastEven = 0;
  var lastOdd = 0;
  var numArray = numbers.split(' ');
  
  for (i=0; i<numArray.length; i++) {
    if (parseInt(numArray[i]) % 2 === 0) { 
      lastEven = i+1;
      evens++;
    } else {
      lastOdd = i+1;
      odds++;
    } // end of IF
  } //end of loop
  return (evens < odds) ? lastEven : lastOdd;
}
