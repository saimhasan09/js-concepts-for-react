
const numbers = [89, 35, 98, 12];

const student = {
    name: 'salib khan',
    age: 32,
    movies:['king Khan','Dhakar Mastan']
}

// template string
const about = `My Name is ${student.name} age of ${student.age} also liked movies ${student.movies[0]}`;
console.log(about)

// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
// when you make an array from an array and add new element then use (...) 

const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);

//create new array from an older array and add an element
const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);