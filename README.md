
# 🥖 Bun Backend Project Structure

This project is structured to follow a clean and scalable backend architecture using [Bun](https://bun.sh/).  
Struktur proyek ini mengikuti arsitektur backend yang bersih dan skalabel menggunakan Bun.

---

## 📁 Project Structure

```
my-bun-app/
├── bun.lock                      # Bun lockfile for managing dependency consistency
├── package.json                  # Project metadata and script definitions
├── tsconfig.json                 # TypeScript configuration file (optional)
├── .env                          # Environment variable definitions
├── src/                          # Main application source code
│    ├── index.ts                 # Server entry point
|    ├── api                      # API module directory
│    │    ├── Modules             # Example API modules
│    │    │    ├─ controllers.ts  # Handles route logic and request processing
│    │    │    ├─ index.ts        # Module route entry point
│    │    │    ├─ models.ts       # Data models or schema definitions (e.g., ORM)
│    │    │    ├─ services.ts     # Business logic and external integrations
│    │    │    └── types.ts       # Shared TypeScript types and interfaces
│    │    └── ...                 # Additional API modules
│    ├── middlewares/             # HTTP middleware functions
│    ├── routes/                  # Route definitions for API endpoints
│    └── utils/                   # General utility and helper functions
├── tests/                        # Unit and integration test cases
└── README.md                     # Project documentation and usage instructions
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
Use `hostname: "0.0.0.0"` in `Bun.serve` to allow external access via local network.
- Bun supports TypeScript out of the box, no need for extra transpilers.
Bun supports TypeScript out of the box, no need for extra transpilers.
- You can customize this structure based on your project needs.
This structure can be customized based on your project needs.

---

## 📚 Reference

- [Bun Documentation](https://bun.sh/docs)
- [Bun GitHub Repo](https://github.com/oven-sh/bun)

---