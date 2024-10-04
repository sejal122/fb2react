const add=(a,b)=>a+b;

console.log(add(3,5)) //8
console.log(add(3,5)) //9
//pure function

//impure function
var sum=0;
function add2(num){
    return sum=sum+num // 1. sum= 0+10 ; sum=10 ; 
}
console.log(add2(10))
console.log(add2(10)) // sum=10+10 ; sum=20
