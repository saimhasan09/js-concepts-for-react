const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


// keys  & values
const keys = objects.keys(student);
const values = objects.values(student);

// for
const numbers = [23, 56, 67, 89, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);


// for of on array like object
// loop on an object using for in

// add or remove from an array

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal' };

// copy products array and then add newProduct
const newProducts = [...products, newProduct]


// create a new array without one specific item from old array

// remove phone means create a new array without the phone

// remove phone by the condition
const remainig = products.filter(product => product.name !== 'phone')