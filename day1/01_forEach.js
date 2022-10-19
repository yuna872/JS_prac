// // 1.
// const colors = ['red', 'orange', 'green', 'yellow']

// const printClr = function (color) {
//   console.log(color)
// }

// colors.forEach(printClr) 

// // 2. 함수 정의를 인자로 넣어보기
// /* 적용될 배열.forEach()*/
// colors.forEach(function (color) {
//   console.log(color)
// })

// // 3. 화살표 함수 적용하기
// colors.forEach((color) => {
//   console.log(color)
// })

//2. images 배열안에 있는 정보를 곱하여 areas 배열에 저장하시오
const images = [
  { height : 10, width : 30 },
  { height : 20, width : 90 },
  { height : 54, width : 32 },
]

const areas = []

images.forEach((image) => {
  areas.push(image.height * image.width)
});

console.log(areas)   //