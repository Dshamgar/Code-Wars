//
// Challenge: Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
// 
// Note! a and b are not ordered!
// 
// Example: 
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum( a,b )
{
   //Good luck!
   
   var increment = (b<a) ? -1 : 1;
   var sum = 0;
   
   for (i=a; i!=b; i=i+increment) {
     sum = sum+i;
   }
   return sum = sum + b;
   
}
