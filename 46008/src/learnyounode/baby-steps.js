'use strict';

// Slices useless parts of the array, and sums the numeric value of the strings provided as arguments
console.log(process.argv.slice(2).reduce((prev, curr) => Number(prev) + Number(curr)));