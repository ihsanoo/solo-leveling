// Deskripsi Soal

// Buat sebuah fungsi yang menerima bilangan bulat `n` dan mengembalikan array dari string yang merepresentasikan angka dari 1 hingga `n`, dengan aturan sebagai berikut:

// 1. Untuk angka yang habis dibagi 3, kembalikan string `"Fizz"`.
// 2. Untuk angka yang habis dibagi 5, kembalikan string `"Buzz"`.
// 3. Untuk angka yang habis dibagi 3 dan 5, kembalikan string `"FizzBuzz"`.
// 4. Selain itu, kembalikan angka tersebut dalam bentuk string.

// ## Contoh

// ### Input
// ```
// n = 15
// ```
function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if(i % 15 === 0 ) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz")
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(i.toString())
        }
    }
    return result;
}



// ### Output
// `` test case
console.log(fizzBuzz(15))
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

console.log(fizzBuzz(50))
