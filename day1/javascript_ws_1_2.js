function palindrome(str) {
  let newStr = ''
  for (let i = str.length-1 ; i > -1; i--) {
    newStr += str[i]
  }

  // console.log(newStr)
  console.log(newStr == str)
  return
}

// 출력
palindrome('level') // true
palindrome('hi') // false