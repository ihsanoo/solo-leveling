function points(games) {
    let result = 0;
    for(let i = 0; i < games.length; i++) {
      let x = games[i][0];
      let y = games[i][2];
      
      if(x == y) {
        result += 1;
      } else if(x > y) {
        result += 3;
      } else {
        result += 0
      }
    } 
    return result;
  }


  // test

  console.log(points(['1:4','4:2','5:1','2:2','3:2','5:4','3:5','5:2','1:5'])) //16
  console.log(points(['1:1','1:3','3:2','7:7','7:4','2:3','5:2','7:2','1:1'])) // 15
  console.log(points(['7:2','5:2','2:2','5:2','1:2','1:4','1:4','4:2','2:2'])) // 14
  console.log(points(['1:2','1:2','1:2','1:2','1:2','1:2','1:2','1:2','3:2'])) // 3