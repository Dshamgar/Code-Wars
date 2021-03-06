// Challenge: Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
// -----------------------
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here

  var x = (str.match(new RegExp("[xX]", "g"))) ? str.match(new RegExp("[xX]", "g")) : [];
  var o = (str.match(new RegExp("[oO]", "g"))) ? str.match(new RegExp("[oO]", "g")) : [];
  
  return (x.length === o.length) ? true : false;
}
