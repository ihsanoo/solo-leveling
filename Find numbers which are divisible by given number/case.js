// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


function divisibleBy(numbers, divisor){
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] % divisor === 0) {
        result.push(numbers[i])
      }
    }
    return result
  }


  // test case

  console.log(divisibleBy([1,2,3,4,5,6,7,8,9,10], 2))
  console.log(divisibleBy([1,2,3,4,5,6,7,8,9,10], 3))
  console.log(divisibleBy([1,2,3,4,5,6,7,8,9,10], 4))
  console.log(divisibleBy([1,2,3,4,5,6,7,8,9,10], 5))