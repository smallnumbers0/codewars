// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    //filter odd numbers and sort them => returns a sorted array
    //loop through old array
    //if old array[i] is even replace to a newarr[i] 
    //if old array[i] is odd replace with sortedarray[i]
    //return new arr
    let sortOdds = array.filter(i => i%2 !== 0).sort((a, b) => a-b)
    let newArray = []
    let even = 0;
    for(let i = 0; i < array.length; i++) { 
      if(array[i] % 2 === 0) {
        newArray[i] = array[i]
        even++
      }
      if(array[i] % 2 !== 0) {
        newArray[i] = sortOdds[i - even]
      }
    }
    return newArray
  }