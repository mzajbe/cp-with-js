// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("Output:", k2, ", nums:", nums2);
