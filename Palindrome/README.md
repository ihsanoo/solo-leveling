# Cek Palindrome

## Deskripsi Soal

Buat sebuah fungsi untuk mengecek apakah sebuah angka merupakan palindrome. Sebuah angka disebut palindrome jika angka tersebut sama ketika dibaca dari depan maupun belakang.

## Contoh

### Input
```
121
```

### Output
```
true
```

### Input
```
-121
```

### Output
```
false
```

### Input
```
10
```

### Output
```
false
```

## Aturan
- Angka negatif bukan merupakan palindrome.
- Fungsi tidak boleh mengubah angka menjadi string untuk memeriksa palindrome.

## Langkah Penyelesaian

1. Jika angka negatif, kembalikan `false` karena tidak mungkin palindrome.
2. Simpan angka asli dan buat angka pembalik dengan cara membalikkan digitnya.
3. Bandingkan angka asli dengan angka hasil pembalik.

## Pseudocode

```
function isPalindrome(n):
    if n < 0:
        return false
    original = n
    reversed = 0
    while n > 0:
        digit = n % 10
        reversed = reversed * 10 + digit
        n = n // 10
    return original == reversed
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
