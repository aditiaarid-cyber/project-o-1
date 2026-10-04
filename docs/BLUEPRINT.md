# PROJECT O — BLUEPRINT

## 1. Gambaran Umum

Project O merupakan platform berbasis website yang dirancang sebagai wadah untuk berbagai **board game digital**.

Platform ini akan dikembangkan secara bertahap. Pada tahap awal, Project O akan memiliki satu game utama, yaitu **Werewolf**. Ke depannya, platform dapat dikembangkan dengan menambahkan berbagai game lainnya.

Blueprint ini digunakan sebagai panduan dasar dalam proses pengembangan Project O agar struktur project, pembagian sistem, dan alur pengembangan dapat dilakukan secara terorganisir.

---

# 2. Struktur Utama Project

Secara umum, Project O terdiri dari dua bagian utama:

```text
PROJECT O
│
├── WEBSITE / PLATFORM
│   │
│   ├── Home
│   ├── Game List
│   ├── Game Page
│   └── Navigasi
│
└── GAMES
    │
    └── WEREWOLF
        │
        ├── Lobby
        ├── Player System
        ├── Role System
        ├── Night Phase
        ├── Day Phase
        ├── Discussion
        ├── Voting
        └── Win / Lose System
```

### Website / Platform

Website berfungsi sebagai wadah utama untuk menampilkan dan mengakses berbagai game yang tersedia di Project O.

### Games

Bagian Games berisi permainan-permainan yang dikembangkan untuk digunakan melalui platform Project O.

Game pertama yang dikembangkan adalah **Werewolf**.

---

# 3. Konsep Website

Website Project O menjadi halaman utama yang digunakan pengguna untuk memilih permainan.

### Alur dasar pengguna:

```text
User
  │
  ▼
Home
  │
  ▼
Game List
  │
  ▼
Pilih Game
  │
  ▼
Game Page
  │
  ▼
Mulai Bermain
```

### Komponen awal website:

* Home
* Daftar Game
* Halaman Game
* Navigasi
* Informasi Project O

Struktur website dapat dikembangkan kembali apabila kebutuhan platform bertambah.

---

# 4. Konsep Game Werewolf

Werewolf merupakan game pertama yang dikembangkan dalam Project O.

Game ini merupakan permainan sosial yang melibatkan beberapa pemain dengan role yang berbeda. Setiap pemain memiliki tujuan masing-masing berdasarkan role yang diperoleh.

### Alur dasar Werewolf:

```text
Lobby
  │
  ▼
Pemain Bergabung
  │
  ▼
Pembagian Role
  │
  ▼
Fase Malam
  │
  ▼
Fase Siang
  │
  ▼
Diskusi
  │
  ▼
Voting
  │
  ▼
Pengecekan Kondisi Menang
  │
  ├── Belum selesai → Kembali ke Fase Malam
  │
  └── Selesai → Menampilkan Hasil
```

Sistem Werewolf dapat dikembangkan lebih lanjut dengan menambahkan role, fitur, dan mekanisme permainan lainnya.

---

# 5. Hubungan Website dan Game

Website dan game merupakan dua bagian yang memiliki tanggung jawab berbeda.

```text
             PROJECT O
                 │
        ┌────────┴────────┐
        │                 │
     WEBSITE           WEREWOLF
      Adit                Aji
        │                 │
        │                 │
  Menyediakan        Menyediakan
     wadah           gameplay
        │                 │
        └────────┬────────┘
                 │
            Terintegrasi
             di Project O
```

Website bertanggung jawab menyediakan akses dan tampilan platform, sedangkan Werewolf bertanggung jawab terhadap sistem dan mekanisme permainan.

Keduanya akan diintegrasikan agar pengguna dapat mengakses Werewolf melalui Project O.

---

# 6. Pembagian Tanggung Jawab

Pengembangan Project O dilakukan dengan pembagian tanggung jawab berdasarkan bagian masing-masing.

| Bagian             | Penanggung Jawab | Review |
| ------------------ | ---------------- | ------ |
| Website / Platform | Adit             | Aji    |
| Home               | Adit             | Aji    |
| Game List          | Adit             | Aji    |
| Navigasi Website   | Adit             | Aji    |
| Halaman Game       | Adit             | Aji    |
| Werewolf Gameplay  | Aji              | Adit   |
| Lobby Werewolf     | Aji              | Adit   |
| Role System        | Aji              | Adit   |
| Night Phase        | Aji              | Adit   |
| Day Phase          | Aji              | Adit   |
| Discussion         | Aji              | Adit   |
| Voting             | Aji              | Adit   |
| Win / Lose System  | Aji              | Adit   |

### Prinsip pembagian tugas

Setiap anggota bertanggung jawab terhadap bagian yang telah ditentukan.

Review dilakukan untuk:

* menemukan bug;
* memberikan masukan;
* memastikan fitur berjalan sesuai rancangan;
* memastikan kode dapat diintegrasikan;
* menjaga kualitas project.

Review **tidak berarti mengambil alih pekerjaan anggota lain**.

Jika ditemukan masalah pada suatu bagian, perbaikan utama tetap dilakukan oleh anggota yang bertanggung jawab terhadap bagian tersebut.

---

# 7. Sistem Pengembangan dengan GitHub

GitHub digunakan sebagai tempat penyimpanan source code dan kolaborasi Project O.

Setiap anggota dianjurkan menggunakan branch masing-masing untuk mengembangkan fitur.

Contoh:

```text
main
│
├── feature/website-adit
│
└── feature/werewolf-aji
```

### Branch Main

Branch `main` digunakan sebagai versi utama Project O yang sudah melalui proses review dan dianggap stabil.

### Branch Adit

Digunakan untuk pengembangan website dan platform Project O.

```text
feature/website-adit
```

### Branch Aji

Digunakan untuk pengembangan game Werewolf.

```text
feature/werewolf-aji
```

---

# 8. Alur Kerja Git

Proses pengembangan dilakukan secara bertahap:

```text
Membuat / Mengubah Fitur
          │
          ▼
       Testing
          │
          ▼
         Commit
          │
          ▼
         Push
          │
          ▼
       GitHub
          │
          ▼
        Review
          │
          ▼
    Perbaikan jika ada
          │
          ▼
        Merge
          │
          ▼
      Branch Main
```

Setiap anggota melakukan testing terhadap pekerjaannya sendiri sebelum meminta review.

---

# 9. Struktur Folder Project

Struktur awal project direncanakan sebagai berikut:

```text
PROJECT-O/
│
├── README.md
│
├── docs/
│   ├── BLUEPRINT.md
│   ├── PEMBAGIAN-TUGAS.md
│   └── ATURAN-DEVELOPMENT.md
│
├── website/
│   └── ...
│
└── games/
    └── werewolf/
        └── ...
```

Struktur folder dapat berubah apabila kebutuhan project berkembang.

---

# 10. Tahapan Pengembangan

Project O akan dikembangkan secara bertahap.

### Tahap 1 — Perencanaan

* Menentukan konsep Project O.
* Menentukan struktur project.
* Menentukan pembagian tugas.
* Menentukan aturan penggunaan GitHub.

### Tahap 2 — Pengembangan Website

Adit mengembangkan:

* Struktur website.
* Homepage.
* Game List.
* Navigasi.
* Halaman akses game.

### Tahap 3 — Pengembangan Werewolf

Aji mengembangkan:

* Lobby.
* Player System.
* Role System.
* Night Phase.
* Day Phase.
* Discussion.
* Voting.
* Win / Lose System.

### Tahap 4 — Testing

Kedua anggota melakukan testing terhadap bagian masing-masing dan melakukan review silang.

### Tahap 5 — Integrasi

Website dan Werewolf digabungkan ke dalam Project O.

### Tahap 6 — Pengembangan Lanjutan

Setelah Werewolf berjalan dengan baik, Project O dapat dikembangkan dengan menambahkan game baru.

---

# 11. Target Pengembangan

Target utama tahap awal Project O adalah:

```text
Website Project O
        +
Game Werewolf
        ↓
Integrasi
        ↓
Project O versi pertama
```

Setelah versi pertama berhasil dibuat dan diuji, Project O dapat dikembangkan menjadi platform yang memiliki lebih banyak board game.

---

# 12. Prinsip Pengembangan Project O

Project O menggunakan beberapa prinsip dalam proses pengembangannya:

1. **Pembagian tanggung jawab yang jelas**
2. **Tidak mengambil alih pekerjaan anggota lain**
3. **Saling melakukan review**
4. **Testing sebelum melakukan merge**
5. **Menggunakan GitHub untuk pengelolaan source code**
6. **Pengembangan dilakukan secara bertahap**
7. **Struktur project dibuat agar dapat dikembangkan di masa depan**

---

# 13. Status Blueprint

Blueprint ini merupakan rancangan awal Project O dan dapat diperbarui sesuai perkembangan project.

**Status:** `Planning / Development`

**Developer:**

* Adit — Website / Platform
* Aji — Game Werewolf

**Project:** Project O
