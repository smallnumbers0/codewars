
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    //combine both strings
    //find repeat letters
    //remove repeat letters
    //return new string




  return [...new Set(s1+s2)].sort().join('') //{'a', 'b', 'c' ...}

      //.sort().join('') //SO HOW DOES PUTTING [around set make it an array]

    console.log(arr)
  }
