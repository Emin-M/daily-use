//! shuffling array
const shuffleArray = (array) => array.sort(() => .5 - Math.random());

//! Usage
console.log(shuffleArray([1, 2, 3, 4, 5, 6]));