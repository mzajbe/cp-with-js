// https://leetcode.com/problems/single-number/


var singleNumber = function(nums) {
    let res = 0;

    for (let n of nums) {
        res ^= n;
    }

    return res;    
};