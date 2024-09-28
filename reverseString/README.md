# Reverse String

## Deskripsi Soal

Buat sebuah fungsi yang membalik urutan elemen di dalam array yang merepresentasikan sebuah string tanpa menggunakan metode bawaan `.reverse()`.

## Contoh

### Input
```
["h", "e", "l", "l", "o"]
```

### Output
```
["o", "l", "l", "e", "h"]
```

## Aturan
- Fungsi tidak boleh menggunakan metode bawaan seperti `.reverse()`.
- Gunakan pendekatan manual untuk menukar posisi elemen dalam array.

## Langkah Penyelesaian

1. Gunakan dua pointer, satu di awal array dan satu di akhir.
2. Tukar elemen di posisi pointer awal dan akhir.
3. Pindahkan kedua pointer ke arah tengah hingga keduanya bertemu.

## Pseudocode

```
function reverseString(arr):
    left = 0
    right = length of arr - 1
    while left < right:
        swap arr[left] with arr[right]
        increment left
        decrement right
    return arr
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
