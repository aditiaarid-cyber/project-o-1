# PROJECT O — PEMBAGIAN TUGAS

## 1. Tujuan

Dokumen ini berisi pembagian tanggung jawab dalam pengembangan Project O.

Project O dikembangkan oleh dua anggota, yaitu **Adit** dan **Aji**. Setiap anggota memiliki bagian utama yang menjadi tanggung jawabnya masing-masing.

Pembagian ini dibuat agar proses pengembangan lebih terorganisir dan setiap anggota dapat fokus pada bagian yang telah ditentukan.

---

# 2. Anggota Project

| Anggota  | Tanggung Jawab Utama         |
| -------- | ---------------------------- |
| **Adit** | Website / Platform Project O |
| **Aji**  | Game Werewolf                |

---

# 3. Tugas Adit — Website / Platform

Adit bertanggung jawab terhadap pengembangan **website utama Project O** yang berfungsi sebagai wadah untuk berbagai game.

### Tugas utama:

* Membuat struktur website Project O.
* Membuat halaman Home.
* Membuat halaman daftar game.
* Membuat navigasi website.
* Membuat halaman informasi game.
* Membuat tampilan website.
* Menyiapkan struktur agar game dapat ditambahkan ke dalam platform.
* Mengintegrasikan game ke dalam website.
* Melakukan testing terhadap website.
* Memperbaiki bug pada bagian website.

### Fokus utama:

> **Membangun platform yang menjadi wadah dan akses menuju berbagai game Project O.**

---

# 4. Tugas Aji — Game Werewolf

Aji bertanggung jawab terhadap pengembangan **game Werewolf** sebagai game pertama dalam Project O.

### Tugas utama:

* Membuat sistem lobby Werewolf.
* Membuat sistem pemain.
* Membuat sistem pembagian role.
* Membuat sistem fase malam.
* Membuat sistem fase siang.
* Membuat sistem diskusi.
* Membuat sistem voting.
* Membuat sistem eliminasi pemain.
* Membuat kondisi kemenangan dan kekalahan.
* Membuat alur permainan Werewolf.
* Melakukan testing terhadap game.
* Memperbaiki bug pada bagian game Werewolf.

### Fokus utama:

> **Membangun sistem permainan Werewolf agar dapat dimainkan dan nantinya diintegrasikan ke dalam platform Project O.**

---

# 5. Sistem Review

Walaupun setiap anggota memiliki tanggung jawab masing-masing, setiap hasil pekerjaan akan melalui proses review oleh anggota lainnya.

### Website

```text
Adit mengerjakan
       ↓
Testing
       ↓
Review oleh Aji
       ↓
Perbaikan oleh Adit jika diperlukan
       ↓
Final
```

### Werewolf

```text
Aji mengerjakan
       ↓
Testing
       ↓
Review oleh Adit
       ↓
Perbaikan oleh Aji jika diperlukan
       ↓
Final
```

---

# 6. Aturan Review

Review dilakukan untuk memastikan:

* Fitur berjalan dengan baik.
* Tidak terdapat bug yang mengganggu.
* Tidak terdapat kesalahan yang terlihat pada sistem.
* Bagian yang dibuat dapat diintegrasikan dengan bagian lainnya.
* Struktur kode tetap terorganisir.
* Fitur sesuai dengan rancangan Project O.

### Ketentuan penting

Review **bukan berarti mengambil alih pekerjaan anggota lain**.

Jika ditemukan masalah pada suatu bagian, anggota yang bertanggung jawab terhadap bagian tersebut tetap menjadi pihak utama yang melakukan perbaikan.

Contoh:

> Aji menemukan tombol pada website tidak berfungsi.

Aji melaporkan masalah tersebut kepada Adit.

**Adit yang memperbaikinya.**

Begitu juga sebaliknya:

> Adit menemukan sistem voting Werewolf mengalami error.

Adit melaporkan masalah tersebut kepada Aji.

**Aji yang memperbaikinya.**

---

# 7. Pembagian Berdasarkan Komponen

| Komponen            |  Adit  |   Aji  |
| ------------------- | :----: | :----: |
| Website             |    ✅   | Review |
| Home                |    ✅   | Review |
| Game List           |    ✅   | Review |
| Navigasi            |    ✅   | Review |
| Game Page           |    ✅   | Review |
| Integrasi Website   |    ✅   | Review |
| Lobby Werewolf      | Review |    ✅   |
| Player System       | Review |    ✅   |
| Role System         | Review |    ✅   |
| Night Phase         | Review |    ✅   |
| Day Phase           | Review |    ✅   |
| Discussion          | Review |    ✅   |
| Voting              | Review |    ✅   |
| Win / Lose System   | Review |    ✅   |
| Testing keseluruhan |    ✅   |    ✅   |

---

# 8. Pembagian Repository

Pengembangan akan dilakukan menggunakan GitHub.

Setiap anggota menggunakan branch untuk mengembangkan bagian masing-masing.

### Adit

```text
feature/website-adit
```

Digunakan untuk pengembangan:

```text
Website
Home
Game List
Navigasi
Game Page
Integrasi
```

### Aji

```text
feature/werewolf-aji
```

Digunakan untuk pengembangan:

```text
Werewolf
Lobby
Player System
Role System
Night Phase
Day Phase
Discussion
Voting
Win / Lose
```

---

# 9. Alur Pekerjaan

Setiap fitur mengikuti alur:

```text
Perencanaan
    ↓
Development
    ↓
Testing
    ↓
Commit
    ↓
Push ke GitHub
    ↓
Review
    ↓
Perbaikan jika diperlukan
    ↓
Approval
    ↓
Merge
```

---

# 10. Aturan Perubahan Fitur

Setiap anggota tidak mengubah fitur utama yang menjadi tanggung jawab anggota lain tanpa berdiskusi terlebih dahulu.

Jika diperlukan perubahan pada bagian anggota lain karena kebutuhan integrasi, perubahan tersebut harus dibicarakan terlebih dahulu.

Contoh:

> Aji membutuhkan perubahan pada halaman website agar Werewolf dapat diakses.

Aji menyampaikan kebutuhan tersebut kepada Adit.

Adit kemudian melakukan perubahan pada bagian website yang diperlukan.

---

# 11. Tujuan Akhir

Pembagian tugas ini bertujuan agar kedua anggota dapat bekerja secara mandiri tetapi tetap terkoordinasi.

Target awal Project O adalah:

```text
Website Project O
        +
Game Werewolf
        ↓
    Integrasi
        ↓
Project O Version 1
```

Setelah versi pertama berhasil dibuat, Project O dapat dikembangkan dengan menambahkan game-game baru.

---

# 12. Developer

### Adit

**Role:** Website / Platform Developer

### Aji

**Role:** Game Developer — Werewolf

---

**Project:** Project O
**Status:** Development
