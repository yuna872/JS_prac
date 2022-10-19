const arr = [1, 2, 3, 4, 5]

// 1.
const result = arr.some(function (num){
  return num % 2 === 0
})

// 2.
const result = arr.some((num) => {
  return num % 2 === 0
})

// 3.
const result = arr.some((num) => num % 2 === 0)

console.log(result)   // true


