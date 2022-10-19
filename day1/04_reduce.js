const numbers = [90, 60, 80, 100]
// 총합구하기

// 1.
const sumV = numbers.reduce(function (total, num) {
  return total + num
}, 0)

console.log(sumV)    // 330

// 2.
const sumV = numbers.reduce((total, num) => {
  return total + num
}, 0)

console.log(sumV)    // 330

// 3.
// 총합
const sumV = numbers.reduce((total, num) => total + num, 0)
// 평균
const avgV = numbers.reduce((total, num) => total + num, 0) / numbers.length   

console.log(sumV)    // 330
console.log(avgV)    // 82.5

