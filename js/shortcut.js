truty // almas, 5, true, {}, [] .......
falsy // '', 0, false, null, undefined

// check truty
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}
const money = 800;
let food;
if (money > 100) {
    food = 'biriani';
}
else {
    food = 'cha biscut'
}

// ternary
let food1 = money > 100 ? 'biriani' : 'cha biscut';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'minarel water';
console.log(drink);

// number to string
const num1 = 52;
const numStr = num1 + '';
console.log(numStr);


// string to number
const number = '500';
const inputNum = +number;
console.log(inputNum);

//
const isActive = true;
// const isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();

// use && if left side is true then right side will be executed
isActive && showUser();

// use or if left side is false then right side will be excuted  
isActive || hideUser();

// toggle boolean
isActive = !isActive;
