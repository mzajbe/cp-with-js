
let name = 'zajbe';
let reverse = [];
let reverseResult=[];

for(let char of name){
    
    reverse.push(char);
}

for(let i=reverse.length;i>=0;i--){
    reverseResult.push(reverse[i]);
}

let result = reverseResult.join('');

console.log(result);
