for (let i = 0; i < 5; i++) {
  let str = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
  for (let j = 0; j <= i; j++) {
    str[4 + j] = '*'
    str[4 - j] = '*'
  }
  console.log(str.join(''))
}