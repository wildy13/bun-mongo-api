
# 🥖 Bun Backend Project Structure

This project is structured to follow a clean and scalable backend architecture using [Bun](https://bun.sh/).  
Struktur proyek ini mengikuti arsitektur backend yang bersih dan skalabel menggunakan Bun.

---

## 📁 Project Structure / Struktur Proyek

```
my-bun-app/
├── bun.lockb                 # Bun lock file / File kunci package dari Bun
├── package.json              # Project metadata and scripts / Metadata proyek dan skrip
├── tsconfig.json             # TypeScript config (optional) / Konfigurasi TypeScript (opsional)
├── .env                      # Environment variables / Variabel lingkungan
├── src/                      # Application source code / Kode sumber aplikasi
│   ├── index.ts              # Server entry point / Titik masuk server
|   ├── api                   # Folder API, berisi modul-modul route
        ├── Modules           # Contoh modul API modules
            ├─ controllers.ts # Route logic handlers / Penanganan
            ├─ index.ts       # Route Logic for Modules
            ├─ models.ts      # Data schemas or ORM models / Skema
            ├─ services.ts    # Business logic and integrations / Logika bisnis & integrasi eksternal
            └── types.ts      # Mendefinisikan tipe dan interface TypeScript yang digunakan di berbagai modul aplikasi.
        └── ...               # Modul API lain
│   ├── middlewares/          # HTTP middlewares / Middleware HTTP
│   ├── routes/               # HTTP routes / Routing HTTP
│   └── utils/                # Utility/helper functions / Fungsi bantu
├── tests/                    # Unit & integration tests / Pengujian unit & integrasi
└── README.md                 # Project documentation / Dokumentasi proyek
```

---

## 🧩 Folder Descriptions / Deskripsi Folder

| Folder/File       | Description (EN)                                                                 | Deskripsi (ID)                                                       |
|-------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------|
| `src/index.ts`    | Main file where the Bun server starts                                           | File utama tempat server Bun dijalankan                             |
| `src/routes/`     | Defines all HTTP routes (e.g., `/user`, `/auth`)                                | Mendefinisikan semua rute HTTP (contoh: `/user`, `/auth`)           |
| `src/controllers/`| Contains functions that handle each route logic                                 | Menyimpan fungsi penanganan logika tiap rute                         |
| `src/services/`   | Contains business logic and external API/database interaction                   | Berisi logika bisnis dan integrasi dengan API/database               |
| `src/models/`     | Defines data structures, ORM schemas, or validation schemas                     | Mendefinisikan struktur data, schema ORM, atau validasi data         |
| `src/middlewares/`| Middlewares for tasks like auth, logging, validation                            | Middleware seperti autentikasi, logging, validasi                    |
| `src/utils/`      | Helper functions reused across the app                                          | Fungsi bantu yang digunakan di berbagai bagian aplikasi              |
| `public/`         | Static files (e.g., images, favicon) served directly                            | File statis (seperti gambar, favicon) yang disajikan langsung        |
| `tests/`          | Tests for services, routes, and utilities using `bun test`                      | Tempat untuk pengujian layanan, rute, dan utilitas dengan `bun test` |
| `.env`            | Store sensitive configuration (e.g., DB credentials, API keys)                  | Menyimpan konfigurasi sensitif (contoh: kredensial DB, API key)      |
| `package.json`    | Defines project name, dependencies, and scripts                                 | Mendefinisikan nama proyek, dependensi, dan skrip                    |
| `bun.lockb`       | Lock file to ensure consistent dependency versions                              | File kunci agar versi dependensi tetap konsisten                     |

---

## 🚀 Getting Started

### Install dependencies

```bash
bun install
```

### Run the development server

```bash
bun run src/index.ts
```

### Run tests

```bash
bun test
```

---

## ✅ Notes / Catatan

- Use `hostname: "0.0.0.0"` in `Bun.serve` to allow external access via local network.  
  Gunakan `hostname: "0.0.0.0"` pada `Bun.serve` agar bisa diakses dari jaringan lokal.
- Bun supports TypeScript out of the box, no need for extra transpilers.  
  Bun mendukung TypeScript langsung, tanpa perlu transpiler tambahan.
- You can customize this structure based on your project needs.  
  Struktur ini bisa disesuaikan dengan kebutuhan proyekmu.

---

## 📚 Reference

- [Bun Documentation](https://bun.sh/docs)
- [Bun GitHub Repo](https://github.com/oven-sh/bun)

---

Happy hacking! 🎉 / Selamat ngoding! 👩‍💻👨‍💻
