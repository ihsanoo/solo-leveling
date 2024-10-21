const xMarksTheSpot = (input) => {
 
    if (input === undefined || input.length === 0) {
      return [];
    }
    
    let result = [];
    let jumlahx = 0;
    
    for(let i = 0; i < input.length; i++) {
      let dimension = input[i];
      for(let j = 0; j < dimension.length; j++) {
        if(dimension[j] === "x") {
          jumlahx += 1;
          result = [i, j]
        }
      }
    }
  if(jumlahx === 0 || jumlahx > 1) {
        return [];
  }
    return result
  }


  console.log(xMarksTheSpot([['x', 'o'], ['o', 'x']]))
  console.log(xMarksTheSpot([['o', 'o'], ['x', 'o']]))
