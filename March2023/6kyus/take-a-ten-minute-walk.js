// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


function isValidWalk(walk) {
    //check if arr is 10
    
    //return to starting point so each direction must equal each other?
    //n = s && w = e
    
    if(walk.length !== 10) {
      return false
   }
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    
    for(let i = 0; i < walk.length; i++) {
      if(walk[i] === 'n') {
        count1++
      }
      else if(walk[i] === 's') {
        count2++
      }
      else if(walk[i] === 'e') {
        count3++
      }
      else if(walk[i] === 'w') {
        count4++
      }
    }
    return count1 === count2 && count3 === count4
  }