// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(square(9));
// console.log(squareArrow(5));

const firstName = (name) => {
    return name.split(' ')[0];
}

const firstNameShort = (name) => name.split(' ')[0];

console.log(firstName('Mike Smith'));
console.log(firstNameShort('Mike Smith'));
