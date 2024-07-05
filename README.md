# js
A code repo for js
for each loop in arrays:-

-arr.forEach(callBackFunction)
-callBackFunction :- here, it is a function to execute for each element in array.
-A

Map method:-

- creates a new array with the results of some operation. the values its callback returns are used to form new array.
-arr.map(callbackFunction(value,index,array))
ex.
let newArr = arr.map((val) => {
    return val * 2
})

filter Method of Array:-
-creates a new arrray of element that gives true for a condition/filter.
ex. all even elements.

let newArr = arr.filter((val) => {
    return val % 2 == 0;
})
