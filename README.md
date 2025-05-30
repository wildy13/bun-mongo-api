
# 🥖 Bun Backend Project Structure

This project is structured to follow a clean and scalable backend architecture using [Bun](https://bun.sh/).  
Struktur proyek ini mengikuti arsitektur backend yang bersih dan skalabel menggunakan Bun.

---

## 📁 Project Structure

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
