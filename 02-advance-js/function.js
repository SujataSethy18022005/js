//function myFunction(){
  //  console.log("welcome to web bocket");
    //console.log("hello everyone");
//}

//myFunction();
//myFunction();
//myFunction();

//function myFunc(msg){ //parameter(input)
//     console.log(msg)
//}
//myFunc("today is a great day and GIFT is best for technical education") //argument


//function -> 2 number sum
//function sum(a,b){
  //  c = a + b;
   // console.log("sum of a + b is ", c);
//}
//sum(2,4);


// sum function
//function sum(a, b){
//    return a + b;
//}

// arrow function in SUM
//const arrowfunc = (a, b) => {
//    console.log(a + b);
//}

// multiplication function
//function mul(a, b){
//    return a * b;
//}

// arrow function in MUL
//const arrowfunc1 = (a, b) => {
  //  c = a * b;
    // console.log(c);
 //}
// arrowfunc1(3,4);
 
 //Q1. creat a function using the "function" keyword that takes a strict as an argument and return the numner of values 
 //in the string. (a,e,i,o,u)
 
 //Q2. Creat an arrow function to perform same task


 //forEach Loop in array
 //let arr = [1,2,3,4,5,6,7];
 //arr.forEach(function printVal(val) {
  //  console.log(val)
 //})
 //arr.forEach((val) => {
 //   console.log(val)
 //})

 //let arr = ["pune", "mumbai", "delhi"];

 //arr.forEach((val) => {
    //console.log(val.toUpperCase())
 //})


//let nums = [2,3,4,5,6];
//nums.forEach((num) => {
  //  console.log(num * num);
//})


//let nums = [67,52,39];
//let newArr = nums.map((val) => {
//    return val * val;
//})

//console.log(newArr);
//console.log(nums);


//array filter method
// all even number from 1 to 9
let arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr.filter((val) => {
    return val % 2 == 0;//logics
})
console.log(newArr);