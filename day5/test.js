function slowRequest(callback) {
  console.log('1. 오래 걸리는 작업 시작..')
  // 3초를 기다리는 함수
  setTimeout(()=>{
    callback()
  }, 3000)
}

function myCallBack(){
  console.log('2. 콜백 함수 실행')
}

slowRequest(myCallBack)
console.log('3. 다른 작업 수행')