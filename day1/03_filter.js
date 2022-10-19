const products = [
  { name : 'cucumber', type : 'vegetable'},
  { name : 'apple', type : 'fruit'},
  { name : 'tomato', type : 'vegetable'},
  { name : 'cherry', type : 'fruit'},
]

// 1.
const fruitFilter = function (product) {
  return product.type === 'fruit'
}

const newArray = products.filter(fruitFilter)

console.log(newArray)   // [ { name: 'apple', type: 'fruit' }, { name: 'cherry', type: 'fruit' }]

// 2.
const newArray = products.filter(function (product) {
  return product.type === 'fruit'
})
console.log(newArray)   // [ { name: 'apple', type: 'fruit' }, { name: 'cherry', type: 'fruit' }]

// 3.
const newArray = products.filter((product) => product.type === 'fruit')
console.log(newArray)   // [ { name: 'apple', type: 'fruit' }, { name: 'cherry', type: 'fruit' }]

