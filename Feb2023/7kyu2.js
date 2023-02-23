// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
    let arr = str.split(' ')
    let stringArr = []
    for(let i = 0; i < arr.length; i++) {
      stringArr.push(arr[i].split('').reverse().join(''))
    }
    return stringArr.join(' ')
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
