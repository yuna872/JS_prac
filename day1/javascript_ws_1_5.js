const participantNums =  [[1, 3, 2, 2, 1], 
[3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
[9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35]
]

participantNums.forEach((participantNum) => {
  for ( let i = 0; i < participantNum.length; i++) {
    let check = false
    for (let j = 0; j < participantNum.length; j++){
      if (i != j) {
        if (participantNum[i] === participantNum[j]){
          check = true
        }
      }
    }

    if (check == false){
      console.log(participantNum[i])
      return
    }
  }
});

// 3
// 100
// 62
