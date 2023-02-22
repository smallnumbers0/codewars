// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case





var countBits = function(n) {
    // convert n to binary
    let binaryString = n.toString(2).split('') // 4 => ["1","0","0"] 7 => ["1", "1", "1"]
    console.log(binaryString)
    let count = 0;

    for(let i = 0; i < binaryString.length; i++) { //loop through each element of array
      if(binaryString[i] === '1') { //compare each element to see if it equals 1
        count++ //increment count by 1 if the element is equal to 1
      }
    }
    return count
    //count number of 1s in binary string
    //return the count
  };
