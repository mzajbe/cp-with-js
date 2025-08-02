// https://leetcode.com/problems/merge-sorted-array/description/

var merge = function(nums1, m, nums2, n) {
  let i = m - 1; // Last element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in nums1

  // Merge in reverse order
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};


let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3,
  n = 3;

let result = merge(nums1, m, nums2, n);

console.log(result);
