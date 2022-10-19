// const clothes = ['shirt', 'skirt', 'pants']
// const items = ['hat', 'watch']

// const shop = {
//   // clothes : clothes,
//   clothes,
//   // items : items,
//   items,
// }
// console.log(shop)    // { clothes: [ 'shirt', 'skirt', 'pants' ], items: [ 'hat', 'watch' ]}

// const myInfo = {
//   name : 'Tom',
//   phoneNumber: '123456', 
//   'apple product' : {
//     airpot : 'airpot pro',
//     iphone : '12',
//   },
// }

// console.log(myInfo.name)       // Tom
// console.log(myInfo['name'])    // Tom
// // console.log(myInfo.'apple product')  // 불가능
// console.log(myInfo['apple product'])     // { airpot: 'airpot pro', iphone: '12' }
// console.log(myInfo['apple product'].iphone)  // 12


// const obj1 = {
//   greeting : function () {
//     console.log('hello!')
//   }
// }

// const obj2 = {
//   greeting() {
//     console.log('hello!')
//   }
// }

// obj1.greeting()  // hello!
// obj2.greeting()  // hello!



// const key = 'country'
// const value = ['한국', '캐나다', '미국', '중국']

// const obj3 = {
//   [key] : value,
// }

// console.log(obj3)          // { country: [ '한국', '캐나다', '미국', '중국' ] }
// console.log(obj3.country)  // [ '한국', '캐나다', '미국', '중국' ]

// const jsonData = {
//   coffee : 'latte',
//   iceCream : 'vanilla'
// }

// // Object => JSON
// const objToJson = JSON.stringify(jsonData)
// console.log(objToJson)          // {"coffee":"latte","iceCream":"vanilla"}
// console.log(typeof objToJson)   // string (JSON은 문자열)


// // JSON => Object
// const jsonToObj = JSON.parse(objToJson)
// console.log(jsonToObj)          // { coffee: 'latte', iceCream: 'vanilla' }
// console.log(typeof jsonToObj)   // object


const myInfo = {
  name : 'yuna kim',
  userId : 'Udragon',
  phoneNumber : '010-1234-1234',
  email : 'dragon@email.com'
}

// const name = myInfo.name
// const userId = myInfo.userId
// const phoneNumber = myInfo.phoneNumber
// const email = myInfo.email

const { name } = myInfo
const { userId } = myInfo
const { phoneNumber } = myInfo
const { email } = myInfo

// 여러개도 가능
const { name, userId } = myInfo
