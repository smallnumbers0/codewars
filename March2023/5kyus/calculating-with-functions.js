// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



function zero(n) {if(n){ return n(0)} else {return 0}} //
function one(n) {if(n) {return n(1)} else {return 1}}
function two(n) {if(n) {return n(2)} else {return 2}}
function three(n) {if(n) {return n(3)} else {return 3}} 
function four(n) {if(n) {return n(4)} else {return 4}}
function five(n) {if(n) {return n(5)} else {return 5}} 
function six(n) {if(n) {return n(6)} else {return 6}}
function seven(n) {if(n) {return n(7)} else{ return 7}}
function eight(n) {if(n) {return n(8)} else{ return 8}}
function nine(n) {if(n) {return n(9)} else {return 9}}

function plus(b) { return function(a) {return Math.floor(a + b)}}
function minus(b) {return function(a) {return Math.floor(a - b)}}
function times(b) {return function(a) {return Math.floor(a * b)}}
function dividedBy(b) { return function(a) {return Math.floor(a / b)}}

//function(function((eight)function(times)function(six)))
console.log(two(plus(three())))