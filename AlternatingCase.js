// Challenge: altERnaTIng cAsE <=> ALTerNAtiNG CaSe
//
//
// String.prototype.toAlternatingCase = function () {
// Define your method here :)
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
//
// Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//
// char source[] = "hello world";
// char *upperCase = to_alternating_case(source);
// (void)puts(upperCase); // outputs: HELLO WORLD
// char source[] = "HELLO WORLD";
// char *upperCase = to_alternating_case(source);
// (void)puts(upperCase); // outputs: hello world
// char source[] = "HeLLo WoRLD";
// char *upperCase = to_alternating_case(source);
// (void)puts(upperCase); // outputs: hEllO wOrld


String.prototype.toAlternatingCase = function () {
  
  var newString = "";
  
  for (i=0; i < this.length; i++) {
    if (this[i] == this[i].toLowerCase()) { // current character is lower case
      newString = newString.concat(this[i].toUpperCase());
    } else { // current character is upper case
      newString = newString.concat(this[i].toLowerCase());
    } // end IF
  } // end FOR
  
  return newString;
  
}
