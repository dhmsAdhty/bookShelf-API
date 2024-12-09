
# 📚 Bookshelf API

API sederhana untuk mengelola koleksi buku menggunakan **Hapi Framework**. Proyek ini mendukung fitur **CRUD** (Create, Read, Update, Delete) dan query parameters untuk pencarian buku.

---

## 📋 **Fitur**
- **Tambah Buku**: Menambahkan buku baru ke koleksi.
- **Lihat Buku Berdasarkan ID**: Mendapatkan detail buku.
- **Update Buku**: Mengubah data buku berdasarkan ID.
- **Hapus Buku**: Menghapus buku berdasarkan ID.

---

## 🚀 **Instalasi**

### 1. Clone Repository
```bash
git clone https://github.com/dhmsAdhty/bookShelf-API.git
cd bookShelf-API
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Server
```bash
npm start
```

Server berjalan di `http://localhost:9000`.

---

## 📄 **Dokumentasi API**
### **Tambah Buku**
- **POST** `/books`
- Body:
  ```json
  {
    "name": "Nama Buku",
    "year": 2024,
    "author": "Penulis",
    "summary": "Ringkasan Buku",
    "publisher": "Penerbit",
    "pageCount": 300,
    "readPage": 100,
    "reading": true
  }
  ```

## 🛠 **Teknologi**
- **Framework**: Hapi.js
- **Database**: Array sebagai penyimpanan sementara.

---

## 🤝 **Kontribusi**
1. Fork repo ini.
2. Buat branch baru (`feature-<fitur>`).
3. Kirim Pull Request.

---

Selamat mencoba! 🎉
