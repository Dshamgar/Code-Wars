// Challenge: convert string to camel case
////---------------------------------------
//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
//Examples:
//
// returns "theStealthWarrior"
//toCamelCase("the-stealth-warrior") 
//
// returns "TheStealthWarrior"

toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){

  return newString = str.replace(/[-_]./g, (match, offset, string) => string[offset+1].toUpperCase());
}

