// https://leetcode.com/problems/move-zeroes/description/

//easy

var moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }

  return nums;
};

let nums = [0, 1, 0, 3, 12];
let result = moveZeroes(nums);
console.log(result);
