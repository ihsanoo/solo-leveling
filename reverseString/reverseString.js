// # Reverse String
// ## Deskripsi Soal
// Buat sebuah fungsi yang membalik urutan elemen di dalam array yang merepresentasikan sebuah 
// string tanpa menggunakan metode bawaan `.reverse()`.
// ## Contoh
// ### Input
// ["h", "e", "l", "l", "o"]
// ### Output
// ["o", "l", "l", "e", "h"]
// # Aturan
// - Fungsi tidak boleh menggunakan metode bawaan seperti `.reverse()`.
// - Gunakan pendekatan manual untuk menukar posisi elemen dalam array.


function reverseString(arr) {
    let result =[];
    for (let i = arr.length -1  ; i >= 0; i--) {
        result.push(arr[i])
    }
    return result;
}


console.log(reverseString(['H', 'e', 'l', 'l', 'o']))
console.log(reverseString(['W', 'o', 'r', 'l', 'd']))
console.log(reverseString(['Y', 'A', 'N', 'Z', 'A', 'H']))