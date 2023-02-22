// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

  let string = name.toUpperCase().split(' ')
  let arr = []
  for(let i = 0; i < string.length; i++){
      arr.push(string[i].charAt(0))
  }
  return arr.join('.')
}
