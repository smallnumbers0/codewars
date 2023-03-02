
//You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//****MY SOLUTION *****/
// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] < 0) {
//         sum += 0
//       }
//       else if(arr[i] >= 0) {
//         sum += arr[i]
//       }
//     }
//     return sum
//   }


  function positiveSum(arr) {
    return arr.reduce((sum,index)=> sum + (index > 0 ? index : 0),0); //array. reduce set paramenters sum, index, and initial value to 0. sum += index if index is greater than 0 else sum += 0
 }
 