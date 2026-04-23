// let person = {
//     name : "John",
//     age : 30,
//     city : "New York"
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// typeof
// console.log(typeof(person));


// let numbers = [1,2,3,4,5];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

// let mixedArray =[1, "Hello",true, {name:"Alice"}, [1,2,3]];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);

// let newarray = [1,2,3,4,5];
// let sqrdArray = newarray.map(num => num*num);
// console.log(sqrdArray);

// function greet(){
//     console.log("Hello, World!")
// }
// greet();

// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(2,3));

// const add = (a,b) => a+b;
// console.log(add(2,3)); 

// const mul = (a,b) => a*b;
// console.log(mul(3,4));

let num = [1,2,3,4,5];
let filterevennum = num.filter(num =>num%2==0);
console.log(filterevennum);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator, currentValue)=> accumulator + currentValue,2);
console.log(total);