// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



function isIsogram(str){
    //...

    for(let i = 0; i < str.length; i++) { //first get a letter from from str
      for(let j = i + 1; j < str.length; j++) { //compare that letter to every letter of str
        if(str[j].toUpperCase() === str[i].toUpperCase()) {
          return false
        }
      }
    }
    return true
  }

  console.log(isIsogram('MoOse'))
