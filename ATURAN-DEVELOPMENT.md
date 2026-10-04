# PROJECT O — ATURAN DEVELOPMENT

## 1. Tujuan

Dokumen ini berisi aturan dan alur kerja yang digunakan dalam proses pengembangan Project O.

Aturan ini dibuat agar Adit dan Aji dapat bekerja menggunakan GitHub dan Visual Studio Code secara terorganisir, mengurangi kemungkinan konflik kode, dan menjaga agar branch utama tetap stabil.

---

## 2. Tools yang Digunakan

Project O menggunakan beberapa tools utama:

* **Visual Studio Code** — digunakan untuk menulis dan mengembangkan source code.
* **Git** — digunakan untuk mengelola perubahan source code.
* **GitHub** — digunakan sebagai repository dan tempat kolaborasi project.

---

## 3. Branch Utama

Branch utama Project O adalah:

```text
main
```

Branch `main` digunakan untuk menyimpan versi project yang sudah melalui proses review dan dianggap cukup stabil.

### Aturan

Anggota tidak melakukan pengembangan fitur secara langsung pada branch `main`.

Pengembangan dilakukan melalui branch masing-masing.

---

## 4. Branch Pengembangan

Setiap anggota memiliki branch pengembangan masing-masing.

### Adit

```text
feature/website-adit
```

Digunakan untuk mengembangkan:

* Website
* Homepage
* Game List
* Navigasi
* Game Page
* Integrasi website

### Aji

```text
feature/werewolf-aji
```

Digunakan untuk mengembangkan:

* Werewolf
* Lobby
* Player System
* Role System
* Night Phase
* Day Phase
* Discussion
* Voting
* Win / Lose System

---

## 5. Alur Pengembangan

Setiap fitur dikembangkan menggunakan alur berikut:

```text
Buat / Pilih Fitur
       ↓
Coding
       ↓
Testing
       ↓
Commit
       ↓
Push
       ↓
Review
       ↓
Perbaikan jika diperlukan
       ↓
Pull Request
       ↓
Approval
       ↓
Merge ke main
```

---

## 6. Aturan Coding

Setiap anggota harus menjaga agar kode:

* Mudah dibaca.
* Memiliki struktur yang jelas.
* Tidak mengandung kode yang tidak digunakan.
* Tidak mengubah bagian anggota lain tanpa persetujuan.
* Tidak memasukkan file yang tidak diperlukan ke repository.
* Tidak memasukkan password, API key, token, atau informasi rahasia ke GitHub.

---

## 7. Aturan Commit

Setiap commit harus memiliki pesan yang menjelaskan perubahan yang dilakukan.

### Contoh yang baik:

```text
feat: add homepage
```

```text
feat: add werewolf voting system
```

```text
fix: fix navigation button
```

```text
fix: fix werewolf role assignment
```

```text
docs: update project blueprint
```

### Format umum:

```text
type: description
```

Jenis commit yang digunakan:

| Type       | Penggunaan                                          |
| ---------- | --------------------------------------------------- |
| `feat`     | Menambahkan fitur baru                              |
| `fix`      | Memperbaiki bug                                     |
| `docs`     | Mengubah dokumentasi                                |
| `style`    | Perubahan tampilan atau formatting                  |
| `refactor` | Merapikan struktur kode tanpa mengubah fungsi utama |
| `test`     | Menambahkan atau memperbaiki testing                |

---

## 8. Aturan Push

Sebelum melakukan push, anggota harus memastikan bahwa perubahan sudah melalui testing lokal.

Contoh:

```text
Coding
  ↓
Run / Test
  ↓
Tidak ada error
  ↓
Commit
  ↓
Push
```

Jangan melakukan push kode yang diketahui masih mengalami error besar tanpa memberikan informasi kepada anggota lainnya.

---

## 9. Aturan Review

Setelah sebuah fitur selesai dan sudah di-push ke GitHub, anggota lainnya melakukan review.

### Adit melakukan review terhadap:

```text
Game Werewolf Aji
```

### Aji melakukan review terhadap:

```text
Website Adit
```

Review bertujuan untuk:

* Menemukan bug.
* Memeriksa fungsi fitur.
* Memeriksa kemungkinan masalah integrasi.
* Memberikan saran perbaikan.
* Memastikan fitur sesuai dengan rancangan.

Review tidak berarti anggota lain mengambil alih coding.

---

## 10. Pull Request

Jika sebuah fitur sudah selesai dan telah melalui testing, anggota dapat membuat **Pull Request** untuk menggabungkan branch ke `main`.

Contoh:

```text
feature/website-adit
        ↓
   Pull Request
        ↓
     Review Aji
        ↓
     Approval
        ↓
   Merge ke main
```

Untuk Aji:

```text
feature/werewolf-aji
        ↓
   Pull Request
        ↓
     Review Adit
        ↓
     Approval
        ↓
   Merge ke main
```

---

## 11. Aturan Merge

Merge ke `main` dilakukan setelah:

* Fitur sudah selesai.
* Fitur sudah diuji.
* Review sudah dilakukan.
* Masalah penting sudah diperbaiki.
* Anggota yang melakukan review menyetujui perubahan.

Branch `main` harus dijaga agar tetap dapat digunakan.

---

## 12. Perubahan pada Bagian Anggota Lain

Anggota tidak boleh mengubah bagian utama yang menjadi tanggung jawab anggota lain tanpa berdiskusi terlebih dahulu.

### Contoh

Aji menemukan bahwa website membutuhkan perubahan agar game Werewolf dapat diakses.

Aji tidak langsung mengubah kode website.

Aji menyampaikan kebutuhan tersebut kepada Adit.

Kemudian Adit melakukan perubahan pada bagian website.

Begitu juga sebaliknya.

---

## 13. Menghindari Konflik Kode

Sebelum mulai bekerja, anggota dianjurkan memastikan branch dan repository dalam kondisi terbaru.

Jika terjadi perubahan pada `main`, anggota melakukan sinkronisasi terlebih dahulu sebelum melanjutkan pekerjaan.

Jika terjadi **merge conflict**, anggota yang memiliki perubahan terkait harus berdiskusi sebelum menyelesaikan conflict.

---

## 14. File yang Tidak Boleh Dimasukkan

Jangan memasukkan informasi atau file yang bersifat pribadi atau rahasia ke repository.

Contohnya:

```text
.env
password
API key
access token
private key
database credential
```

Jika project menggunakan environment variable, gunakan file contoh seperti:

```text
.env.example
```

dan jangan memasukkan nilai rahasia sebenarnya.

---

## 15. Backup dan Keamanan

GitHub digunakan sebagai repository utama, tetapi setiap anggota tetap dianjurkan menyimpan salinan project secara lokal.

Sebelum melakukan perubahan besar, pastikan perubahan sebelumnya sudah tersimpan melalui commit.

---

## 16. Komunikasi

Jika terdapat perubahan yang dapat mempengaruhi bagian anggota lain, perubahan tersebut harus dikomunikasikan terlebih dahulu.

Contohnya:

* Perubahan struktur folder.
* Perubahan struktur database.
* Perubahan sistem integrasi.
* Perubahan API.
* Perubahan sistem game.
* Perubahan struktur website.

Tujuannya agar kedua anggota mengetahui perubahan yang dapat mempengaruhi bagian masing-masing.

---

## 17. Prinsip Kerja Project O

Project O menggunakan prinsip:

> **"Kerjakan bagian masing-masing, saling review, dan bangun project bersama."**

Adit bertanggung jawab terhadap website dan platform.

Aji bertanggung jawab terhadap game Werewolf.

Keduanya tetap bekerja sebagai satu tim dengan melakukan komunikasi, testing, review, dan integrasi secara bersama-sama.

---

## 18. Status Development

**Project:** Project O
**Status:** Development
**Developer:** Adit & Aji
