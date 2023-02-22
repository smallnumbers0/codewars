// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
    // build here
    let floor = ''
    let arr = []
    //for the first floor add 1 star ["*"]
    for(let i = 0; i < nFloors; i++) { //increment through all floors | 1,3,5,7,9,11
        for(let x = 0; x < nFloors - (i+1); x++)  //3: 2 spaces 5 stars "  *****"
           floor += ' '  //add a space before star " "

        for(let j = 0; j < (i+1) * 2 - 1; j++)  //0+1 * 2 - 1 = 1 => "*" (1+1)*2 - 1 = 3 => "***"
           floor += '*'  // 3+1 * 2 - 1 = 7

        for(let x = 0; x < nFloors - (i+1); x++) //
           floor += ' '  //add a space after star
           arr.push(floor)
           floor = ''     //ITS BECAUSE I WASNT RESETTING THE FLOOR CORRECTLY                        //MY BRAIN CELLS :(
      }
    return arr
    }
    //every floor add 2 stars a space in front and behind the stars [" *** "]


// const star = '*';
// const space = ' '
// let arr = []

// function towerBuild(num) {
// 	for(let i = 0; i < num; i++) {
//   		arr.push(space.repeat(i) + star.repeat((i+1) * 2 -1) + space.repeat(i) )
// 	}
//         return arr
// }

// console.log(towerBuild(5))
