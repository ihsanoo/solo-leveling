# Fizz Buzz

## Deskripsi Soal

Buat sebuah fungsi yang menerima bilangan bulat `n` dan mengembalikan array dari string yang merepresentasikan angka dari 1 hingga `n`, dengan aturan sebagai berikut:

1. Untuk angka yang habis dibagi 3, kembalikan string `"Fizz"`.
2. Untuk angka yang habis dibagi 5, kembalikan string `"Buzz"`.
3. Untuk angka yang habis dibagi 3 dan 5, kembalikan string `"FizzBuzz"`.
4. Selain itu, kembalikan angka tersebut dalam bentuk string.

## Contoh

### Input
```
n = 15
```

### Output
```
["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

## Aturan
- Angka yang dimasukkan adalah bilangan bulat positif.
- Fungsi harus mengembalikan array yang berisi angka atau kata sesuai dengan aturan di atas.

## Langkah Penyelesaian

1. Loop dari angka 1 hingga `n`.
2. Cek apakah angka tersebut habis dibagi 3 atau 5:
   - Jika ya, tambahkan `"Fizz"`, `"Buzz"`, atau `"FizzBuzz"` ke dalam array sesuai kondisi.
   - Jika tidak, tambahkan angka dalam bentuk string.
3. Kembalikan array yang telah diisi.

## Pseudocode

```
function fizzBuzz(n):
    result = []
    for i from 1 to n:
        if i % 3 == 0 and i % 5 == 0:
            append "FizzBuzz" to result
        else if i % 3 == 0:
            append "Fizz" to result
        else if i % 5 == 0:
            append "Buzz" to result
        else:
            append i.toString() to result
    return result
```

## Bahasa Pemrograman

- Implementasi dapat dilakukan menggunakan berbagai bahasa pemrograman seperti:
  - Python
  - JavaScript
  - Java
  - C++
  - Dan lain-lain.

---

Happy Coding! 🎉
