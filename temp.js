let first = 20;
let second = 30;

console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

console.log('---::Value Exchanging::---')

let one = 100;
let two = 200;

console.log(one , two);

const temp1 = one;
one = two; 
two = temp1;

console.log(one ,two);

console.log('---:: Temporary value ::---');



let a = 45;
let b = 75;

console.log(a,b);

const temp2 = a; 
a = b; 
b = temp2;

console.log(a,b);

console.log('-------------------------------------')

let x = 91;
let y = 23;

console.log(x,y);

const tempo = x;
x = y; 
y = tempo; 

console.log(x,y);

// Approach 2 --- Destructing
[first, second] = [second , first]
console.log(first,second);
