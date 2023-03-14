// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    // Fix me!
     num1 = a.split('')
     num2 = b.split('')
     carry = 0;
     let sum = 0;
     let x = 0;
     let y = 0;
     let str = ''
     numMax = Math.max(num1.length, num2.length)
     //9 2 1.   1.    7. 6.  1.  4.     1    4  1      1441 ???
    for(let i = 1; i <= numMax; i++) {   //"1372", "69" numbers are diff length
       x = num1.length >= i ? parseInt(num1[num1.length - i]) : 0 //nums are still diff length
       y = num2.length >= i ? parseInt(num2[num2.length - i]) : 0 
       sum = x + y + carry // 9 + 2 + 0
       if(sum >= 10) {
         carry = 1          //carry 1
       } else {carry = 0}
       str = (sum%10).toString() + str     
     }
     if(carry > 0) {
       str = carry.toString() + str
     }
     //141411.      1372+69              1 carry 11 4 carry 14 4 carry 14  1
     return str
     //loop through each num 
     //check for diff length and put them 0 if shorter
     //if number(a[i]) + number(b[i]) >= 10 
     //carry = 1 else 0
     //index2: 8 and 2 = 10 carry 1 
     //index1: 8 and 2 + carry = 11 carry 1 again 
     //index0: 8 and 2 + carry = 11 carry 1
     
     //after loop ends check if carry > 0 and add to string
     
     //add a[i] + b[i] + carry to sum
     
        //'888' + '222' => '1110'  0 carry 1, 1 carry 1, 1 carry 1, 1 carry 1 
   }
   