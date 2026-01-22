# Sistem Manajemen Kelas XI-A dengan Tailwind CSS

Aplikasi web modern untuk manajemen kelas XI-A di MAN 2 Kota Banjarmasin. Dibangun dengan Vue.js 3 dan Tailwind CSS.

## Fitur Utama

1. **Dashboard Interaktif** - Ringkasan visual informasi kelas
2. **Modul Bendahara** - Pengelolaan keuangan dengan UI yang intuitif
3. **Modul Sekretaris** - Pencatatan tugas, presensi, dan kegiatan
4. **Modul Kebersihan** - Pengelolaan jadwal dan status kebersihan
5. **Sistem Role-based Access Control** - Setiap role memiliki akses berbeda
6. **UI Modern & Responsif** - Menggunakan Tailwind CSS untuk desain yang clean

## Teknologi yang Digunakan

- Vue.js 3 - Framework JavaScript progresif
- Tailwind CSS - Utility-first CSS framework
- Font Awesome - Ikon vektor
- Google Fonts (Inter) - Font modern dan mudah dibaca

## Cara Penggunaan

1. Buka file `index.html` di browser modern
2. Login dengan kredensial berikut:
   - Email: `[role]@gmail.com` (contoh: `ketua@gmail.com`)
   - Password: `admin123458`
3. Role yang tersedia:
   - `ketua@gmail.com` (akses penuh)
   - `bendahara@gmail.com` (hanya keuangan)
   - `sekretaris@gmail.com` (hanya tugas & presensi)
   - `kebersihan@gmail.com` (hanya kebersihan)

## Fitur Khusus Tailwind CSS

1. **Desain Responsif** - Tampilan optimal di semua perangkat
2. **Utility Classes** - Pengembangan cepat dengan kelas utilitas
3. **Gradient & Shadows** - Efek visual modern
4. **Hover States** - Interaksi pengguna yang lebih baik
5. **Custom Animations** - Transisi halus antar komponen
6. **Dark Mode Ready** - Desain dengan kontras yang baik

## Struktur Komponen

1. **Login Page** - Autentikasi sederhana dengan validasi
2. **Main Layout** - Header, sidebar, dan footer konsisten
3. **Dashboard** - Ringkasan metrik dan quick actions
4. **Bendahara Module** - Form transaksi dan riwayat keuangan
5. **Sekretaris Module** - Tabs untuk tugas dan presensi
6. **Kebersihan Module** - Jadwal dan status kebersihan

## Keunggulan

1. **Tanpa Build Process** - Langsung jalankan di browser
2. **Performance Optimized** - Ringan dan cepat
3. **Developer Friendly** - Kode terstruktur dan mudah dikembangkan
4. **Extensible** - Mudah ditambahkan fitur baru
5. **Prototipe Siap Pakai** - Cocok untuk presentasi dan demo

## Catatan

Aplikasi ini merupakan prototipe frontend-only. Data disimpan di memori browser dan akan hilang saat halaman direfresh. Untuk produksi, diperlukan integrasi dengan backend.

## Lisensi

Hak cipta © 2026 Muhammad Ridhani Akmal
