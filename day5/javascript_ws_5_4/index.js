/* 
  아래에 코드를 작성해주세요.
*/
// 검색어 입력 값 keyword 변수에 저장하기
// api key => 	7da4f5d2b959ae633dc485c3fc588dfa
// http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=YOUR_API_KEY&format=json
const searchInput = document.querySelector('.search-box__input')
let keyword = ""
searchInput.addEventListener('input', (event)=>{
  keyword = searchInput.value
  
})
console.log(keyword)

API_URL = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=7da4f5d2b959ae633dc485c3fc588dfa&format=json`
console.log(API_URL)
const searchBtn = document.querySelector('.search-box__button')
function fetchAlbums(page=1, limit=10) {
  
  axios.get(API_URL)
    .then((response)=>{
      console.log(response)
    })
    .catch((response)=>{
      alert('잠시후 다시 시도해주세요')
    })
}
searchBtn.addEventListener('click', fetchAlbums)

