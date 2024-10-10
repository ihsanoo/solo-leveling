// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
    //Code
    let plus = value1 + value2;
    let min = value1 - value2;
    let mul = value1 * value2;
    let per = value1 / value2;
    if(operation === '+') {
      return plus
    } else if(operation === '-') {
      return min
    } else if(operation === '*') {
      return mul
    } else {
      return per
    }
  }

//OR

function basicOp2(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
  // test case

  console.log(basicOp('+', 2, 3))
  console.log(basicOp('-', 2, 3))
  console.log(basicOp('*', 2, 3))
  console.log(basicOp('/', 49,7 ))


  console.log(basicOp2('+', 2, 3))
  console.log(basicOp2('-', 2, 3))
  console.log(basicOp2('*', 2, 3))
  console.log(basicOp2('/', 49,7 ))