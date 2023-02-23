

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //code here
  let string = str.toUpperCase()
  let countx = 0;
  let county = 0;
  let empty = ''
  if(string === empty) {
    return true
  }
  for(let i = 0; i < string.length; i++) {
    for(let j = i+1; j < string.length; j++) {
      if (string[i] !== 'X' && string[i] !== 'O') {
        return true
      }
      else if(string[i] === string[j] && string[i] === 'O') {
        countx++
      }
      else if(string[i] === string[j] && string[i] === 'X') {
        county++
      }
      }
      if(countx === county) {
        return true
      }
  }
  return false
}
