const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
// map // map will return an array
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);

console.log(brands)
console.log(price)

// forEach // forEach doesn't return anything
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))
// multiline forEach
products.forEach(product => {
    
})

// filter (help to filter product by the condition)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);


// find (retun the first product of the search from the array)
const special = products.find(product => product.name.includes('n'))