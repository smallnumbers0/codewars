// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    //take the string and remove its spaces in between words
    //this removes the spaces between the words => Thenarwhallbacons...
    //take the alphabet and assign a number to each letter in the alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letter

    let arr = []; //Nah dont think im ready for this problem yet
    for(let i = 0; i < text.length; i++) {
      letter = text[i].toLowerCase();
      if(alphabet.indexOf(letter) > -1) { // alphabet.indexOf(t) = 20 -1 means not found so if it is found
        arr.push(alphabet.indexOf(letter)+1)
      }
    }
    return arr.toString().split(',').join(' ') //WHY AM I GETTING 7 instead of 20 for first number
    }



    //compare each letter of string to each letter of alphabet

    //assign its number

    //show the numbers



  // let s = 'abc'
  // let arrS = s.split("") // => ["a", "b", "c", ...]
  // let finalArr = []

  // for(let i = 0; i < arrS.length; i++) {
  //   if(arrS[i] === 'a') {
  //     finalArr.push[1]
  //   }
  //   else if(arrS[i] ==='b') { //LOL IT WORKS JUST HAVE TO DO IT 26 TIMES

  //
