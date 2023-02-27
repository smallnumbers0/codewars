// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(string){
  //TODO Have fun :)

  //if word is >= 5 letters reverse the word //.split().reverse().join() //["Hey", "fellow", "warrior"]
  let newString = []
  let words = string.split(" ")
//   let newWord = ""

  for(let i = 0; i < words.length; i++){
    if(words[i].length < 5) {
      newString.push(words[i])
      }
    else if(words[i].length >= 5) {
      newString.push(words[i].split("").reverse().join(""))
      
      }
    }
  return newString.join(" ")
  }

//       for(let j = words[i].length - 1; j >= 0; j--) {  //fellow j = 5 4 3 2 1 0
//         newWord += words[i][j] //word[1][5] + word[1][4] + word[1][3] ...
//        }
//       }
//     newString.push(newWord)
//    }
//    return newString.join(' ') // //how do i turn array back to a string with space in between
//   }

console.log(spinWords("Seriously this is the last one"))
