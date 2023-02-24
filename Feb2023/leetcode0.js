// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let num = 0;
    let majority = 0;
    //loop through each element of array to count repeated nums
    //if count is 0 then reset majority
    //increment count by 1 if found repeating number
    //decrment count by 1 if not repeating
    for(let i = 0; i < nums.length; i++) {
        num = nums[i]
        if(count === 0) {
            count = 1
            majority = num;
        }
        else if (num === majority) {
            count++
        }
        else {
            count--
        }
    }
     return majority

 };
