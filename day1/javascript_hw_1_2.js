// 1번
const nums = [1,2,3,4,5,6,7,8]


for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}

// for 문에 사용되는 변수 i 는 값이 변화하기 때문에 let 으로 선언해주어야 함


// 2번
for (num of nums) {
  console.log(num, typeof num)
}

// for in은 속성 이름을 통해 반복하므로 속성 값을 통해 반복하는 for of 구문을 사용해야 한다

