function findMax(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return n1;
    }
        else if(n2 > n1 && n2 > n3){
            return n2;
        }
        else{
            return n3;
        }
}

const result = findMax(78,43,65);
console.log(result);


console.log('----------------------------')
const a = 320;
const b = 23;
const c = 65;
const result1 = Math.max(a,b,c);
console.log(result1);
