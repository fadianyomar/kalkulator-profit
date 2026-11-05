# Kalkulator Profit PWA

Aplikasi web pribadi dark mode, tanpa riwayat transaksi. Pajak 10% ditambahkan ke harga beli dan harga jual.

## Memasang di Android (gratis dengan GitHub Pages)
1. Buat repository **Public** baru di https://github.com, misalnya `kalkulator-profit`.
2. Ekstrak ZIP ini di komputer.
3. Unggah seluruh isi folder `KalkulatorProfitPWA` ke root repository (index.html harus berada di root).
4. Buka Settings → Pages.
5. Pada Build and deployment pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu Save.
6. Tunggu GitHub Pages menerbitkan alamat HTTPS, misalnya `https://username.github.io/kalkulator-profit/`.
7. Buka alamat itu di Chrome Android. Pilih menu ⋮ → **Install app** atau **Add to Home screen**.
8. Buka aplikasi sekali saat online. Setelah aset tersimpan, kalkulator dapat digunakan offline.

## Uji coba di komputer
Jalankan `python -m http.server 8000` dari folder project, lalu buka `http://localhost:8000`.

PWA harus disajikan melalui HTTPS (atau localhost); membuka index.html langsung tidak mendukung instalasi PWA. Pajak adalah simulasi tambahan 10%, bukan penentuan kewajiban pajak aktual. Biaya admin/ongkir belum dihitung.
