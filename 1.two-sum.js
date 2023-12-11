/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = {};
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        console.log (num);
        if(num in result) {
            console.log [result[num],i];
        }
        result[nums[i]] = i ;
        console.log (i);
    }
    return null;
};
// @lc code=end
