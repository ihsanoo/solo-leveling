// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    // your code
    return +n.toString().replace(/0+$/, '')
}


console.log(noBoringZeros(123400))
console.log(noBoringZeros(100))
console.log(noBoringZeros(10310))
console.log(noBoringZeros(209200))
console.log(noBoringZeros(100000000))