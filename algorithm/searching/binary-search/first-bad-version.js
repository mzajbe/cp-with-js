// https://leetcode.com/problems/first-bad-version/description/?envType=problem-list-v2&envId=9ixr4vaj



var firstBadVersion = function(isBadVersion) {
    return function(n) {
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

