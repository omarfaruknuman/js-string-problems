function findMin(a, b, c){
    if(a < b && a < c)
    {
        return a;
    }
    else if(b < a && b < c)
    {
        return b; 
    }
    else
   {
    return c;
   }
}

const result = findMin(3254, 334, 65)
console.log(result);


console.log('----:: using Math.min ::----')

const  result1 = Math.min(3254, 334, 65)
console.log(result1);