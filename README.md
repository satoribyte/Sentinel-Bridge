**Sentinel Bridge** adalah alat keamanan berbasis web yang menggabungkan JavaScript dan Python untuk mendeteksi dan memonitor aktivitas mencurigakan di situs web. Program ini terdiri dari dua bagian utama:

1. **Bagian Klien (JavaScript)**:
   - Kode JavaScript diintegrasikan ke dalam halaman web untuk mengumpulkan data aktivitas pengguna, seperti pergerakan mouse, klik, dan informasi perangkat.
   - Data aktivitas dikirim secara berkala ke server Python untuk dianalisis.

2. **Bagian Server (Python)**:
   - Server Python menggunakan Flask untuk menerima data aktivitas dari klien.
   - Data yang diterima dianalisis untuk mendeteksi aktivitas mencurigakan. Jika terdeteksi, server akan mencatat informasi tersebut dan memberikan respons yang sesuai.
   - Aktivitas pengguna disimpan dalam file log untuk analisis lebih lanjut.

## Fitur Utama

- **Pengumpulan Data Aktivitas**: Mengumpulkan data seperti URL halaman, agen pengguna, resolusi layar, dan waktu yang dihabiskan di halaman.
- **Monitoring Aktivitas Pengguna**: Memantau pergerakan mouse, klik, dan event lainnya di halaman web.
- **Deteksi Aktivitas Mencurigakan**: Mendeteksi dan melaporkan aktivitas mencurigakan berdasarkan jumlah event yang dikumpulkan.
- **Penyimpanan Log**: Menyimpan data aktivitas dan URL asal ke dalam file log untuk analisis dan pelaporan.

## Struktur Kode

### Bagian Klien (JavaScript)
- **Fungsi Utama**: Mengumpulkan data aktivitas pengguna dan mengirimkannya ke server secara berkala.
- **Event Listener**: Memantau pergerakan mouse dan klik, lalu mencatatnya.

### Bagian Server (Python)
- **Endpoint**: `/detect` - Menerima data aktivitas dari klien.
- **Analisis**: Memeriksa jumlah event untuk mendeteksi aktivitas mencurigakan.
- **Logging**: Menyimpan data aktivitas dan URL asal ke dalam file `user_activity_log.json`.

## Instalasi

1. **Instal Flask**:
   ```pip install Flask```


2. **Jalankan Server**:
- Simpan kode Python ke dalam file, misalnya `server.py`.
- Jalankan server dengan perintah:
  ```
  python server.py
  ```

3. **Integrasi Klien**:
- Salin kode JavaScript ke dalam file HTML di situs web Anda.

## Penggunaan

- **Integrasi**: Tempelkan kode JavaScript di bagian `<head>` atau `<body>` halaman web Anda.
- **Pengawasan**: Server akan mulai menerima data dan menyimpannya dalam file log.

## Catatan

- Pastikan untuk mematuhi regulasi privasi data saat menggunakan alat ini.
- Kode ini dimaksudkan untuk tujuan keamanan dan monitoring; penggunaan yang tidak sesuai dapat melanggar kebijakan privasi.

## Kontak

Jika Anda memiliki pertanyaan atau membutuhkan dukungan lebih lanjut, silakan hubungi kami di [satoribyte@gmail.com](mailto:satoribyte@gmail.com).

## Dukung Saya di Trakteer

[![Trakteer Button](https://cdn-icons-png.flaticon.com/512/6098/6098529.png)](https://trakteer.id/deni_gentar_candana/tip?open=true)
