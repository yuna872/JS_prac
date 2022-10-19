const numbers = [1, 2, 3, 4, 5]

// 1.
const double = function (number) {
  return number * 2
}

const doubleNumbers = numbers.map(double)
console.log(doubleNumbers)      // [ 2, 4, 6, 8, 10 ]

// 2.
const doubleNumbers = numbers.map(function (number) {
    return number * 2
})
console.log(doubleNumbers)      // [ 2, 4, 6, 8, 10 ]

// 3.
const doubleNumbers = numbers.map((number) => number * 2)
console.log(doubleNumbers)      // [ 2, 4, 6, 8, 10 ]
