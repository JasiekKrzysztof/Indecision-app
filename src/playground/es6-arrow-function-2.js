const add = (a, b) => {
    return a + b;
}
console.log(add(4, 12));


// this keyword - no longer bound

// const user = {
//     name: 'Jasiek',
//     cities: ['Mszana', 'Kraków', 'Rabka'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' był w miejscowości: ' + city)
//         });
//     }
// };
// user.printPlacesLived();

const user = {
    name: 'Jasiek',
    cities: ['Mszana', 'Kraków', 'Rabka'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' był w miejscowości: ' + city);
    }
};

console.log(user.printPlacesLived());

// Chalange area

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());