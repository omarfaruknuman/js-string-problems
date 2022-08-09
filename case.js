const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toLowerCase());

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}

console.log(userName.toUpperCase());
console.log(userInput.toUpperCase());
if(userName.toUpperCase() === userInput.toUpperCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}