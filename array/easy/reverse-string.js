// https://leetcode.com/problems/reverse-string/description/


var reverseString = function(s) {
    let left = 0;
    let right = s.length -1;

    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++;
        right--;
    }
};


let s = ["a","b","c"];
 reverseString(s);
console.log(s);
