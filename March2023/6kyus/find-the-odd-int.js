// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(A) {
    //happy coding!
    let arr = A.sort((a, b) => b - a) //sort to make repeating nums next to each other
    let count = 0;
    for(let i = 0; i < arr.length; i++) { //take each number in the array
      for(let j = 0; j < arr.length; j++) { //compare it to all numbers in the arr
        if(arr[i] === arr[j]) { //if that number equal to other nums increase count by 1
          count++
        }
      }
      if(count % 2 !== 0 ) return arr[i] //after looping through the second loops, return if repeated odd times
    }
  }
    
    
    
  