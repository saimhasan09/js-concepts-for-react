// How to declare a vaiable using let and const
const fatherName = "Hossain";
let season = 'rainy';


//conditions basic and multiple
if (fatherName === 'arnold' || season === 'rainy') {
     
}
else if (fatherName === 'Arnold') {
    
}
 
// array declare
// index
// length
const numbers = [85, 35, 98, 12];

//loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}

// function 
function multiple(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

// object
const student = {
    name: 'salib khan',
    age: 32,
    movies:['king Khan','Dhakar Mastan']
}
const myVariable = "age"

// 3 ways to access property by name
console.log(student, age); // direct by property

console.log(student["age"]); // access via property name string

console.log(student[myVariable]);// access via property name in a variable
