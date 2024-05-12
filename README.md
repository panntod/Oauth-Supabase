# OAuth Supabase 🌐

## Deskripsi

Dalam repo ini, mengimplementasikan OAuth atau autentikasi menggunakan layanan dari Supabase. Berisikan implementasi singkat dari code pembuatan loginpage, dan dashboard.

## Dependencies

- @supabase/auth-ui-react ✨
- @supabase/auth-ui-shared 🌐
- @supabase/supabase-js 📊
- Tailwind 🎨
- Vite 🛠️
- React ⚙️

## Set Up Supabase

### Langkah 1:

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Create Project" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Pastikan sudah membuat layanan Supabase Project atau buat menggunakan [Supabase](https://supabase.com/dashboard/new/).

### Langkah 2:

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Config Project" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Jangan lupa untuk menseting konfigurasi redirect url pada supabase.

### Langkah 3:

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Provider" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Pastikan sudah menyalakan layanan Oauth yang akan digunakan, disini saya menggunakan `discord`, Aktifkan layanan pada `Authentication` lalu pergi ke `Providers`, copy call back url untuk diberikan pada `discord`

### Langkah 4:

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Create Discord" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Pastikan sudah menyalakan `discord developer`, lalu anda dapat menuju ke [Discord Developer Panel](https://discord.com/developers/applications), Lalu buat aplikasi baru.

### Langkah 5:

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Discord Dashboard" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Setelah itu akan muncul tampilan dashboard, pergi ke bagian `Oauth`.

## Langkah 6:

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Discord Dashboard" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Copy `client id` dan buat ulang `client secret` lalu copy. Setelah itu paste url redirect nya berisikan url yang didapatkan dilangkah sebelum nya.

Kembali pada `Supabase Providers` atau yang `Langkah 3`, isi client id dan juga secret sesuai dengan yang didapatkan di `Langkah 6`. Click Save.

### Atau

Anda bisa melihat tutorial selengkapnya di [Cooper Code](https://www.youtube.com/watch?v=H1V716XPUEs)

## Instalasi Project

Jalankan perintah:

```bash
git clone https://github.com/panntod/Oauth-Supabase.git
```

Setelah itu masuk ke direktori, dengan menjalankan:

```bash
cd Oauth-Supabase
```

Setelah itu instalasi dependensi, dengan menjalankan:

```bash
npm install
```

<div align="center">
    <img src="https://github.com/panntod/Learn-Express-Prisma/blob/master/assets/preview.png?raw=true" alt="Image's Api" style="display: block; margin-left: auto; margin-right: auto;">
</div>

Setelah itu, ganti `.env.example` menjadi `.env`, dan isi dengan code yang kalian dapatkan dari `Supabase Project Api`

```env
VITE_API_URL=<Ganti Dengan Url Supabase>
VITE_API_KEY=<Ganti Dengan Anon Public Key>
```
